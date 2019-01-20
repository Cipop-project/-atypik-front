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
    descriptifs: ['peopleNumber'],
    people_info: [{ first_name: '', last_name: '', birthday: '' }],
    user:
    {
      id: '1',
      activate: true,
      advertisement: true,
      birthday: '1992-09-10T23:50:07.236Z',
      clientType: 'TENANT',
      language: 'FR',
      phoneNumber: '0783489217',
      pricingType: 'EUR',
      sexe: 'MALE',
      username: 'Carlos Sanchez',
      name: 'Carlos',
      last_name: 'Sanchez',
      email: 'krlos-jose@hotmail.com',
      address: '14 rue de Frot, Paris',
      location: 'Paris, France',
      photo: 'https://picsum.photos/300?random',
      inscription_date: 'septembre 2018',
      note: 4.3,
      approvalNotifications: 3,
      description: 'Je serai ravi de vous accueuillir à bord ,afin de partager notre passion maritime ,et que vous decouvriez ce petit coin de paradis meme en restant au port, merci beaucoup pour tout vos adorables messages.',
      homes: [
        {
          name: 'Cabanes dans les arbres',
          location: 'Strasbourg, France',
          price: '87€',
          note: 4.7,
          images: ['/static/img/falaises-etretat.jpg'],
          product_id: 'deY24Xs6eds'
        },
        {
          name: 'Cabanes das',
          location: 'Strasbourg, France',
          price: '87€',
          note: 4.7,
          images: ['/static/img/falaises-etretat.jpg'],
          product_id: 'deY24Xazed42'
        }
      ],
      messages: [
        {
          from: 'Charlie',
          content: 'bla bla lorem ipsum',
          date: '03 mar 2018'
        },
        {
          from: 'Charline',
          content: 'bla bla lorem ipsum bla bla lorem ipsumbla bla lorem ipsumbla bla lorem ipsumbla bla lorem ipsumbla bla lorem ipsumbla bla lorem ipsum',
          date: '03 sep 2018'
        }
      ],
      notifications: [
        {
          content: 'bla bla lorem ipsumbla bla lorem ipsumbla bla lorem ipsumbla ',
          date: '05 nov 2018'
        }
      ]
    },
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
      { title: 'Hauts de France',
        country: 'France',
        count: '27',
        img: '/static/img/falaises-etretat.jpg',
        src: 'region/adkTYrs5Fz41'
      },
      { title: 'Hauts de France',
        country: 'France',
        count: '27',
        img: '/static/img/falaises-etretat.jpg',
        src: 'region/adkTYrs5Fz41'
      },
      { title: 'Hauts de France',
        country: 'France',
        count: '27',
        img: '/static/img/falaises-etretat.jpg',
        src: 'region/adkTYrs5Fz41'
      },
      { title: 'Hauts de France',
        country: 'France',
        count: '27',
        img: '/static/img/falaises-etretat.jpg',
        src: 'region/adkTYrs5Fz41'
      },
      { title: 'Hauts de France',
        country: 'France',
        count: '27',
        img: '/static/img/falaises-etretat.jpg',
        src: 'region/adkTYrs5Fz41'
      },
      { title: 'Hauts de France',
        country: 'France',
        count: '27',
        img: '/static/img/falaises-etretat.jpg',
        src: 'region/adkTYrs5Fz41'
      },
      { title: 'Hauts de France',
        country: 'France',
        count: '27',
        img: '/static/img/falaises-etretat.jpg',
        src: 'region/adkTYrs5Fz41'
      },
      { title: 'Hauts de France',
        country: 'France',
        count: '27',
        img: '/static/img/falaises-etretat.jpg',
        src: 'region/adkTYrs5Fz41'
      }
    ],
    homeTypes: [
      { title: 'Cabanes dans les arbres',
        count: '27',
        img: '/static/img/falaises-etretat.jpg',
        src: 'homeType/deY24Xs6eds'
      },
      { title: 'Cabanes dans les arbres',
        count: '27',
        img: '/static/img/falaises-etretat.jpg',
        src: 'homeType/deY24Xs6eds'
      },
      { title: 'Cabanes dans les arbres',
        count: '27',
        img: '/static/img/falaises-etretat.jpg',
        src: 'homeType/deY24Xs6eds'
      },
      { title: 'Cabanes dans les arbres',
        count: '27',
        img: '/static/img/falaises-etretat.jpg',
        src: 'homeType/deY24Xs6eds'
      },
      { title: 'Cabanes dans les arbres',
        count: '27',
        img: '/static/img/falaises-etretat.jpg',
        src: 'homeType/deY24Xs6eds'
      },
      { title: 'Cabanes dans les arbres',
        count: '27',
        img: '/static/img/falaises-etretat.jpg',
        src: 'homeType/deY24Xs6eds'
      },
      { title: 'Cabanes dans les arbres',
        count: '27',
        img: '/static/img/falaises-etretat.jpg',
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
  computed: {
    loggedIn: !!localStorage.user
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
