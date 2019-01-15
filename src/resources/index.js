import Vue from 'vue'
// import storage from '../storage'
// import dateUtils from '../common/date'

function getUrl () {
  // product
  return '/product/api/products'
}

export default {
  findArray (referenceId, commentObject) {
    return Vue.http.post(`${getUrl()}/${referenceId}`, commentObject)
  },
  findCities () {
    return Vue.http.get(`${getUrl()}/cities`)
  },
  search (product) {
    console.log(product)
    return Vue.http.post(`${getUrl()}/find`, product)
  }
}
