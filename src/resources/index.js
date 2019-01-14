import Vue from 'vue'
// import storage from '../storage'
// import dateUtils from '../common/date'

function getUrl () {
  // product
  return '/product/api/products'
}

export default {
  // save (commentObject) {
  //   if (commentObject.id) {
  //     return Vue.http.put(`${getUrl()}/${commentObject.id}`, commentObject)
  //   } else {
  //     return Vue.http.post(getUrl(), commentObject)
  //   }
  // },
  // create (comment) {
  //   return Vue.http.post(getUrl(), comment)
  // },
  findArray (referenceId, commentObject) {
    return Vue.http.post(`${getUrl()}/${referenceId}`, commentObject)
  },
  find (query) {
    query = dateUtils.adjustTime(query)
    return Vue.http.get(`${getUrl()}`, { params: query })
  },
  search (product) {
    console.log(product)
    return Vue.http.post(`${getUrl()}/find`, product)
  }
}
