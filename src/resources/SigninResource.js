import Vue from 'vue';
import storage from '../storage';
import dateUtils from '../common/date';

function getUrl() {
  return `${storage.getAPIPrefix()}/supports`
}

export default {
  get(id) {
    return Vue.http.get(`${getUrl()}/${id}`)
  },
  find(query) {
    query = dateUtils.adjustTime(query);
    return Vue.http.get(`${getUrl()}`, {params: query})
  },
  downloadSupports(query) {
    query = dateUtils.adjustTime(query);
    return Vue.http
      .get(`${getUrl()}/downloadExcel`, {params: query, responseType: 'arraybuffer'})
      .then((response) => {
        Vue.download(response, `售后派送单.xlsx`)
      });
  },
  downloadDeclaration(query) {
    query = dateUtils.adjustTime(query);
    return Vue.http
      .get(`${getUrl()}/downloadDeclarationExcel`, {params: query, responseType: 'arraybuffer'})
      .then((response) => {
        Vue.download(response, `申报单.xlsx`)
      });
  },
  create(support) {
    return Vue.http.post(getUrl(), support)
  },
  update(support) {
    return Vue.http.put(`${getUrl()}/${support.id}`, support)
  },
  delete(id) {
    return Vue.http.delete(`${getUrl()}/${id}`)
  },
  uploadSupports(args) {
    return Vue.http.post(`${getUrl()}/array`, args);
  },
  uploadAttachment(id, file) {
    const url = `${getUrl()}/${id}/upload-attachment`;
    const data = new FormData();
    data.append('file', file);
    const config = {
      headers: {'content-type': 'multipart/form-data'}
    }
    return Vue.http.post(url, data, config);
  },
  downloadAttachment(id) {
    return Vue.http
      .get(`${getUrl()}/${id}/download-attachment`, {responseType: 'arraybuffer'})
      .then((response) => {
        const fileName = `${id}.pdf`
        Vue.download(response, fileName)
      })
  }
}
