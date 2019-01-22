import Vue from 'vue'
/* USER
    {
      activate: boolean - true
      email: string - not null --- check if exists
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

    USER
    {
      activate: boolean - true
      email: string - not null
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
  }
}

function getDefault () {
  return { data: {}, message: '', status: 0 }
}

export default {
  // USER
  createUser (data) {
    return Vue.http.post(`${getUrl('client')}`, data)
  },
  readUser (data) {
    return Vue.http.get(`${getUrl('client')}/findByUserName/` + data)
  },
  updateUser (data) {
    console.log(data)
    return Vue.http.put(`${getUrl('client')}/update`, {}, data)
    // return getDefault()
  },
  deleteUser (user) {
    // return Vue.http.post(`${getUrl('product')}`, data)
    return getDefault()
  },
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
    return Vue.http.get(`${getUrl('product')}/find/` + data)
  },
  createCommand (data) {
    return Vue.http.post(`${getUrl('command')}`, data)
  },
  login (data) {
    return Vue.http.post(`${getUrl('login')}`, data)
  },
  findUser (data) {
    // to finish
    return Vue.http.get(`${getUrl('client')}/findByUserName/` + data)
  },
  registerUser (data) {
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
  },
  loadComments (id, date) {
    return getDefault()
  }
}
