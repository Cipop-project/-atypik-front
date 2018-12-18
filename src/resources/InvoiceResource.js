import Vue from 'vue';
import dateUtils from '../common/date';
import storage from '../storage'

function getUrl() {
  return `${storage.getAPIPrefix()}/invoices`
}

export default {
  get(id) {
    return Vue.http.get(`${getUrl()}/${id}`)
  },
  save(invoice) {
    if (invoice.id) {
      return Vue.http.put(`${getUrl()}/${invoice.id}`, invoice)
    } else {
      return Vue.http.post(`${getUrl()}`, invoice)
    }
  },
  find(query) {
    query = dateUtils.adjustTime(query);
    return Vue.http.get(`${getUrl()}`, {params: query})
  },
  delete(id) {
    return Vue.http.delete(`${getUrl()}/${id}`)
  },
  async download(query) {
    query = dateUtils.adjustTime(query);
    const {invoicedAt} = query.filter;
    const response = await Vue.http.get(`${getUrl()}/excel`, {params: query, responseType: 'arraybuffer'});
    Vue.download(response, `细账单${invoicedAt.gt} ~ ${invoicedAt.lt}.xlsx`)
  },
  async findArray(query) {
    return Vue.http.get(`${getUrl()}/array`, {params: query});
  }
}
