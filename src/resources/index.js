import Vue from 'vue'
// import storage from '../storage'
// import dateUtils from '../common/date'

function getUrl (type) {
  if (type === 'product') {
    return 'product/api/products'
  } else if (type === 'command') {
    return 'command/api/commands'
  } else if (type === 'client') {
    return 'client/api/clients'
  }
}
function getDefault () {
  return { data: {}, message: '', status: 0 }
}

export default {
  findArray (referenceId, commentObject) {
    return Vue.http.post(`${getUrl('product')}/${referenceId}`, commentObject)
  },
  findCities () {
    return Vue.http.get(`${getUrl('product')}/cities`)
  },
  search (data) {
    return Vue.http.post(`${getUrl('product')}/find`, data)
  },
  searchProduct (data) {
    return Vue.http.get(`${getUrl('product')}/` + data)
  },
  createCommand (data) {
    return Vue.http.post(`${getUrl('command')}`, data)
  },
  login (data) {
    // return Vue.http.post(`${getUrl('client')}`, data)
    return getDefault()
  },
  registerUser (data) {
    console.log
    return Vue.http.post(`${getUrl('client')}`, data)
    // return getDefault()
  },
  registerHomeImage (data) {
    // return Vue.http.post(`${getUrl('image')}`, data)
    return getDefault()
  },
  registerHome (data) {
    // return Vue.http.post(`${getUrl('product')}`, data)
    return getDefault()
  }
}
