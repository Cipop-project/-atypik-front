import Vue from 'vue'
import Vuex from 'vuex'
import UserRegisterApi from '../services/api/UserRegister'
import UserLoginApi from '../services/api/UserLogin'

Vue.use(Vuex)

function getYears () {
  let list = []
  for (let i = new Date().toISOString().substring(0, 4); i >= 1940; i--) {
    list.push(i)
  }
  return list
}
function getLanguages () {
  return [
    { code: 'FR', name: 'Français' },
    { code: 'EN', name: 'English' }
  ]
}
function getCurrencies () {
  return [
    { code: 'USD', name: 'US Dollar' },
    { code: 'EUR', name: 'Euro' }
  ]
}

export const store = new Vuex.Store({
  state: {
    homepage: {
      mainImage: 'https://s3-eu-west-1.amazonaws.com/cipop/dev/index/home.jpg'
    },
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    cities: [
      { 'city_id': 1, 'city': 'Paris', 'country': 'France' },
      { 'city_id': 2, 'city': 'Lille', 'country': 'France' },
      { 'city_id': 3, 'city': 'Marseille', 'country': 'France' }
    ],
    months: [
      { format: '01', name: 'Janvier' },
      { format: '02', name: 'Fevrier' },
      { format: '03', name: 'Mars' },
      { format: '04', name: 'Avril' },
      { format: '05', name: 'Mai' },
      { format: '06', name: 'Juin' },
      { format: '07', name: 'Julliet' },
      { format: '08', name: 'Aout' },
      { format: '09', name: 'Septembre' },
      { format: '10', name: 'Octobre' },
      { format: '11', name: 'Novembre' },
      { format: '12', name: 'Decembre' }
    ],
    years: getYears(),
    currencies: getCurrencies(),
    languages: getLanguages(),
    descriptifs: [
      { icon: 'mdi-home', public_name: 'Couchages', name: 'peopleNumber' },
      { icon: 'mdi-home', public_name: 'Couchages', name: 'peopleNumber' }
    ],
    people_info: [{ first_name: '', last_name: '', birthday: '' }],
    user: localStorage.user ? JSON.parse(localStorage.user).user : {},
    products: [
      {
        name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        images: ['/static/img/falaises-etretat.jpg'],
        src: 'details/deY24Xs6eds'
      },
      {
        name: 'Cabanes das',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        images: ['/static/img/falaises-etretat.jpg'],
        src: 'details/deY24Xs6eds'
      }
    ],
    popularZones: [
      { title: 'Ile de France',
        country: 'France',
        img: '/static/img/ile_de_france.jpg',
        src: 'region/adkTYrs5Fz41'
      },
      { title: 'Normandie',
        country: 'France',
        img: '/static/img/normandie.jpg',
        src: 'region/adkTYrs5Fz41'
      },
      { title: 'Bretagne',
        country: 'France',
        count: '27',
        img: '/static/img/bretagne.jpg',
        src: 'region/adkTYrs5Fz41'
      },
      { title: 'Nord-pas-de-calais',
        country: 'France',
        count: '27',
        img: '/static/img/nord_pas_de_calais.jpg',
        src: 'region/adkTYrs5Fz41'
      },
      { title: 'Centre',
        country: 'France',
        count: '27',
        img: '/static/img/centre.jpg',
        src: 'region/adkTYrs5Fz41'
      }
    ],
    homeTypes: [
      { title: 'Cabanes dans les arbres',
        count: '27',
        img: '/static/img/cabane.jpg',
        src: 'homeType/deY24Xs6eds'
      },
      { title: 'Roulotte',
        count: '27',
        img: '/static/img/roulotte.jpg',
        src: 'homeType/deY24Xs6eds'
      },
      { title: 'Yourte',
        count: '27',
        img: '/static/img/yourte.jpg',
        src: 'homeType/deY24Xs6eds'
      },
      { title: 'Bulle',
        count: '27',
        img: '/static/img/bulle.jpg',
        src: 'homeType/deY24Xs6eds'
      }
    ],
    bestHomes: [
      { name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        images: ['/static/img/falaises-etretat.jpg'],
        src: 'details/deY24Xs6eds'
      },
      { name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        images: ['/static/img/falaises-etretat.jpg'],
        src: 'details/deY24Xs6eds'
      },
      { name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        images: ['/static/img/falaises-etretat.jpg'],
        src: 'details/deY24Xs6eds'
      },
      { name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        images: ['/static/img/falaises-etretat.jpg'],
        src: 'details/deY24Xs6eds'
      },
      { name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        images: ['/static/img/falaises-etretat.jpg'],
        src: 'details/deY24Xs6eds'
      },
      { name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        images: ['/static/img/falaises-etretat.jpg'],
        src: 'details/deY24Xs6eds'
      },
      { name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        images: ['/static/img/falaises-etretat.jpg'],
        src: 'details/deY24Xs6eds'
      },
      { name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        images: ['/static/img/falaises-etretat.jpg'],
        src: 'details/deY24Xs6eds'
      },
      { name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        images: ['/static/img/falaises-etretat.jpg'],
        src: 'details/deY24Xs6eds'
      }
    ],
    loggedIn: !!localStorage.user
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
    registerRequest (state) {
      state.pending = true
    },
    registerFailure (state, error) {
      state.pending = false
      console.log(error)
    },
    registerSuccess (state) {
      state.pending = false
      console.log('Register OK')
    },
    loginRequest (state) {
      state.pending = true
    },
    loginFailure (state, error) {
      state.pending = false
      console.log(error)
    },
    loginSuccess (state) {
      state.pending = false
      console.log('Login OK')
    }
  },
  actions: {
    register ({ dispatch, commit }, user) {
      commit('registerRequest', user)
      console.log('register request')
      UserRegisterApi.registerUser(user)
      // commit('registerFailure', 'Error: L\'addresse mail est deja associé à une compte')
      commit('registerSuccess')
    },
    login ({ dispatch, commit }, user) {
      commit('loginRequest', user)
      console.log('login request')
      UserLoginApi.authUser(user)
      commit('loginSuccess')
    }
  }
})
