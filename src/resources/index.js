import Vue from 'vue'
/* USER
    {
      activate: boolean - true
      email: string - not null --- check if exists
      username: email
      firstName: string - not null
      lastName: string - not null
      password: string - not null
      phoneNumber: string - not null
      birthday: string - not null
      sexe: string - null
      language: string - null
      pricingType: string - null
      advertisement: boolean - false
      clientType: string - not null
      description: string - null
      image: string - null
    }
*/
function getUrl (type) {
  if (type === 'product') {
    return 'product/api/products'
  } else if (type === 'command') {
    return 'command/api/commands'
  } else if (type === 'client') {
    return 'client/api/clients'
  } else if (type === 'login') {
    return 'login'
  } else if (type === 'productImages') {
    return 'product/api/images'
  }
}

function getDefault () {
  return { data: {}, message: '', status: 0 }
}

export default {
  // USER ----------------------------------------------------------
  login (data) {
    return Vue.http.post(`${getUrl('login')}`, data).then(response => { return response }, response => { return response })
  },
  createUser (data) {
    return Vue.http.post(`${getUrl('client')}`, data).then(response => { return response }, response => { return response })
  },
  readUser (data) {
    return Vue.http.get(`${getUrl('client')}/findByUserName/` + data).then(response => { return response }, response => { return response })
  },
  updateUser (data) {
    console.log(data)
    return Vue.http.put(`${getUrl('client')}/update`, data).then(response => { return response }, response => { return response })
  },
  deleteUser (user) { // TO TEST
    // return Vue.http.post(`${getUrl('product')}`, data).then(response => { return response }, response => { return response })
    return getDefault()
  },
  updateUserImage (userId, data) {
    return Vue.http.post(`${getUrl('client')}/upload-image-client/` + userId, data).then(response => { return response }, response => { return response })
  },
  // PRODUCT ----------------------------------------------------------
  createProduct (data) {
    return Vue.http.post(`${getUrl('product')}`, data).then(response => { return response }, response => { return response })
  },
  createProductImage (data) {
    return Vue.http.post(`${getUrl('productImages')}/upload-image`, data).then(response => { return response }, response => { return response })
  },
  readUserProducts (userId) {
    return Vue.http.get(`${getUrl('client')}/findByUserName/` + data).then(response => { return response }, response => { return response })
  },
  findArray (referenceId, commentObject) {
    return Vue.http.post(`${getUrl('product')}/${referenceId}`, commentObject).then(response => { return response }, response => { return response })
  },
  findCities () {
    return Vue.http.get(`${getUrl('product')}/cities`).then(response => { return response }, response => { return response })
  },
  search (data) {
    return Vue.http.post(`${getUrl('product')}/find`, data).then(response => { return response }, response => { return response })
  },
  searchProduct (data) {
    return Vue.http.get(`${getUrl('product')}/find/` + data).then(response => { return response }, response => { return response })
  },
  createCommand (data) {
    return Vue.http.post(`${getUrl('command')}`, data).then(response => { return response }, response => { return response })
  },
  findUser (data) {
    // to finish
    return Vue.http.get(`${getUrl('client')}/findByUserName/` + data).then(response => { return response }, response => { return response })
  },
  registerUser (data) {
    return Vue.http.post(`${getUrl('client')}`, data).then(response => { return response }, response => { return response })
    // return getDefault()
  },
  registerHomeImage (data) {
    // return Vue.http.post(`${getUrl('image')}`, data).then(response => { return response }, response => { return response })
    return getDefault()
  },
  registerHome (data) {
    // return Vue.http.post(`${getUrl('product')}`, data).then(response => { return response }, response => { return response })
    return getDefault()
  },
  updateHome (data) {
    console.log(data)
    // return Vue.http.post(`${getUrl('client')}`, data).then(response => { return response }, response => { return response })
    return getDefault()
  },
  deleteHome (data) {
    console.log(data)
    // return Vue.http.post(`${getUrl('client')}`, data).then(response => { return response }, response => { return response })
    return getDefault()
  },
  getReservationDatesByMonth (data) {
    console.log(data)
    // return Vue.http.post(`${getUrl('client')}`, data).then(response => { return response }, response => { return response })
    // return getDefault()
    return { data: [{ start: '2019-01-22', end: '2019-01-25', reservation_id: '001' }, { start: '2019-02-25', end: '2019-02-27', reservation_id: '001' }], message: '', status: 0 }
  },
  loadComments (id, date) {
    return getDefault()
  }
}
