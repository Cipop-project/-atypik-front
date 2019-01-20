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
    // return getDefault()
    // return Vue.http.post(`http://localhost:8080/login`, data)
    if (data.username === 'admin' && data.password === 'admin') {
      return { data: { username: data.username, token: 'XXXXXYYYYZZZZZ' }, message: '', status: 0 }
    } else {
      return { data: {}, message: 'L\'email ou mot de passe ne coincide pas', status: -1 }
    }
  },
  registerUser (data) {
    console.log(data)
    return Vue.http.post(`${getUrl('client')}`, data)
    // return getDefault()
  },
  updateUser (data) {
    console.log(data)
    // return Vue.http.post(`${getUrl('client')}`, data)
    return getDefault()
  },
  deleteUser (user) {
    // return Vue.http.post(`${getUrl('product')}`, data)
    return getDefault()
  },
  registerHomeImage (data) {
    // return Vue.http.post(`${getUrl('image')}`, data)
    return getDefault()
  },
  registerHome (data) {
    // return Vue.http.post(`${getUrl('product')}`, data)
    return getDefault()
  },
  updateHome (data) {
    console.log(data)
    // return Vue.http.post(`${getUrl('client')}`, data)
    return getDefault()
  },
  deleteHome (data) {
    console.log(data)
    // return Vue.http.post(`${getUrl('client')}`, data)
    return getDefault()
  },
  getReservationDatesByMonth (data) {
    console.log(data)
    // return Vue.http.post(`${getUrl('client')}`, data)
    // return getDefault()
    return { data: [{ start: '2019-01-22', end: '2019-01-25', reservation_id: '001' }, { start: '2019-02-25', end: '2019-02-27', reservation_id: '001' }], message: '', status: 0 }
  }
}
