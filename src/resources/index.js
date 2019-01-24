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
  } else if (type === 'productComment') {
    return 'product/api/comments'
  }
}

function getDefault () {
  return { data: {}, message: '', status: 0 }
}

export default {
  // ----------------------------------------------------------
  // USER ----------------------------------------------------------
  // ----------------------------------------------------------
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
  // ----------------------------------------------------------
  // PRODUCT ----------------------------------------------------------
  // ----------------------------------------------------------
  createProduct (data) {
    return Vue.http.post(`${getUrl('product')}`, data).then(response => { return response }, response => { return response })
  },
  readProduct (productId) {
    return Vue.http.get(`${getUrl('product')}/find/` + productId).then(response => { return response }, response => { return response })
  },
  updateProduct (productId, data) {
    return Vue.http.put(`${getUrl('product')}/` + productId, data).then(response => { return response }, response => { return response })
  },
  deleteProduct (productId) {
    return Vue.http.delete(`${getUrl('product')}/` + productId).then(response => { return response }, response => { return response })
  },
  createProductImage (data) {
    return Vue.http.post(`${getUrl('productImages')}/upload-image`, data).then(response => { return response }, response => { return response })
  },
  createProductComment (data) {
    return Vue.http.post(`${getUrl('productComment')}`, data).then(response => { return response }, response => { return response })
  },
  readProductComment (productId) {
    console.log(productId)
    return Vue.http.get(`${getUrl('productComment')}/findAllByProduct/` + productId).then(response => { return response }, response => { return response })
  },
  readUserProducts (userId) {
    console.log(userId)
    return Vue.http.get(`${getUrl('product')}/findAllByClient/` + userId).then(response => { return response }, response => { return response })
  },
  // ----------------------------------------------------------
  // COMMAND ----------------------------------------------------------
  // ----------------------------------------------------------
  createCommand (data) {
    return Vue.http.post(`${getUrl('command')}`, data).then(response => { return response }, response => { return response })
  },
  createCommandPayment (commandId) {
    return Vue.http.get(`${getUrl('command')}/payment/` + commandId).then(response => { return response }, response => { return response })
  },
  // ----------------------------------------------------------
  // OTHER ----------------------------------------------------------
  // ----------------------------------------------------------
  findCities () {
    return Vue.http.get(`${getUrl('product')}/cities`).then(response => { return response }, response => { return response })
  },
  search (data) {
    return Vue.http.post(`${getUrl('product')}/find`, data).then(response => { return response }, response => { return response })
  },
  getReservationDatesByMonth (data) {
    console.log(data)
    // return Vue.http.post(`${getUrl('client')}`, data).then(response => { return response }, response => { return response })
    // return getDefault()
    return { data: [{ start: '2019-01-22', end: '2019-01-25', reservation_id: '001' }, { start: '2019-02-25', end: '2019-02-27', reservation_id: '001' }], message: '', status: 0 }
  }
}
