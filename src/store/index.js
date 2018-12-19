import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products: [
      {
        'id': 1,
        'title': 'first product',
        'images': [
          { 'title': 'first img', 'src': '/static/img/home_img_1.jpg' },
          { 'title': 'second img', 'src': '/static/img/home_img_2.jpg' }
        ],
        'description': 'Here goes the description of first product'
      },
      {
        'id': 2,
        'title': 'second product',
        'images': [
          { 'title': 'first img', 'src': '/static/img/home_img_1.jpg' },
          { 'title': 'second img', 'src': '/static/img/home_img_2.jpg' }
        ],
        'description': 'Here goes the description of second product'
      }
    ]
    // emailRules: [
    //   v => !!v || 'l\'Email est obligatoire',
    //   v => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'Entrez une email valide'
    // ],
    // nameRules: [
    //   v => v.length < 200 || 'Maximum 200 caractères'
    // ],
    // lastNameRules: [
    //   v => v.length < 200 || 'Maximum 200 caractères'
    // ],
    // birthdayRules: [
    //   v => /[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(v) || 'Entrez une date de naissance valide'
    // ],
    // passwordRules: [
    //   value => (value.length > 0 && value.length >= 8) || 'Minimum 8 caractères'
    // ],
    // passwordConfirmationRules: [
    //   v => this.password === v || 'Le mots de passe ne ocincident pas'
    // ],
    // phoneRules: [
    //   value => (value.length > 0) || 'Entrez un numero de telephone valide'
    // ]
  },
  mutations: {
    submitRegister (state) {
      state.pending = true
    }
  },
  actions: {
    register ({ dispatch, commit }, user) {
      commit('submitRegister', user)
      // service.REGISTER_REQUEST
      console.log('register request')
    }
  }
})
