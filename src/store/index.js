import Vue from 'vue'
import Vuex from 'vuex'
import UserRegisterApi from '../services/api/UserRegister'
import UserLoginApi from '../services/api/UserLogin'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    homepage: {
      mainImage: 'https://s3-eu-west-1.amazonaws.com/cipop/dev/index/home.jpg'
    },
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    loggedIn: true,
    user:
    {
      name: 'Carlos',
      last_name: 'Sanchez',
      type: 'host',
      location: 'Paris, France',
      photo: 'https://picsum.photos/300?random',
      inscription_date: 'septembre 2018',
      note: 4.3,
      description: 'Nous serons de vous accueuillir à bord ,afin de partager notre passion maritime ,et que vous decouvriez ce petit coin de paradis meme en restant au port, merci beaucoup pour tout vos adorables messages.',
      homes: [
        {
          name: 'Cabanes dans les arbres',
          location: 'Strasbourg, France',
          price: '87€',
          note: 4.7,
          img: '/static/img/falaises-etretat.jpg',
          src: 'details/deY24Xs6eds'
        },
        {
          name: 'Cabanes das',
          location: 'Strasbourg, France',
          price: '87€',
          note: 4.7,
          img: '/static/img/falaises-etretat.jpg',
          src: 'details/deY24Xs6eds'
        }
      ],
      comments: [
        {
          user: {
            name: 'Charline',
            location: 'Paris, France',
            photo: 'https://picsum.photos/300?random'
          },
          content: 'Très beau séjour',
          date: 'novembre 2018'
        }
      ]
    },
    products: [
      {
        name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        img: '/static/img/falaises-etretat.jpg',
        src: 'details/deY24Xs6eds'
      },
      {
        name: 'Cabanes das',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        img: '/static/img/falaises-etretat.jpg',
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
        img: '/static/img/falaises-etretat.jpg',
        src: 'details/deY24Xs6eds'
      },
      { name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        img: '/static/img/falaises-etretat.jpg',
        src: 'details/deY24Xs6eds'
      },
      { name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        img: '/static/img/falaises-etretat.jpg',
        src: 'details/deY24Xs6eds'
      },
      { name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        img: '/static/img/falaises-etretat.jpg',
        src: 'details/deY24Xs6eds'
      },
      { name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        img: '/static/img/falaises-etretat.jpg',
        src: 'details/deY24Xs6eds'
      },
      { name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        img: '/static/img/falaises-etretat.jpg',
        src: 'details/deY24Xs6eds'
      },
      { name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        img: '/static/img/falaises-etretat.jpg',
        src: 'details/deY24Xs6eds'
      },
      { name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        img: '/static/img/falaises-etretat.jpg',
        src: 'details/deY24Xs6eds'
      },
      { name: 'Cabanes dans les arbres',
        location: 'Strasbourg, France',
        price: '87€',
        note: 4.7,
        img: '/static/img/falaises-etretat.jpg',
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
