import Vue from 'vue'
import App from './views/App.vue'
import '../assets/index.sass'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import Vuetify from 'vuetify'
import router from './router'
import NProgress from 'NProgress'
import 'flag-icon-css/css/flag-icon.css'
import VueResource from 'vue-resource'
import NotationStars from './components/NotationStars.vue'
import { store } from './store'
import Header from './components/Header.vue'
import HomepageHeader from './components/HomepageHeader.vue'
import BasicSearch from './components/BasicSearch.vue'
import BigCard from './components/BigCard.vue'
import SmallCard from './components/SmallCard.vue'
import ReservationAriane from './components/ReservationAriane.vue'
import HostProfileNavigationDrawer from './components/HostProfileNavigationDrawer.vue'
import UserProfileNavigationDrawer from './components/UserProfileNavigationDrawer.vue'
import NormalComment from './components/NormalComment.vue'
import ImageUploader from './components/ImageUploader.vue'
import ReservationDetails from './components/ReservationDetails.vue'
import AtypikSelect from './components/elements/AtypikSelect.vue'
import AtypikCarousel from './components/elements/AtypikCarousel.vue'
import SwiperSlide from './components/elements/SwiperSlide.vue'
import DateRangePicker from './components/elements/DateRangePicker.vue'
import PriceDetails from './components/elements/PriceDetails.vue'
import AccountNotifications from './components/AccountNotifications.vue'
import PasswordConfirmation from './components/PasswordConfirmation.vue'
import ReservationCalendar from './components/ReservationCalendar.vue'
import Loading from './components/Loading.vue'
import FlashBag from './components/FlashBag.vue'
import Footer from './components/Footer.vue'
import PhotoGallery from './components/PhotoGallery.vue'
import GoogleMaps from './components/GoogleMaps.vue'
import AtypikAlert from './components/AtypikAlert.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { addDays, subDays, parse } from 'date-fns'
import 'nprogress/nprogress.css'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBKG-vlqh-B3rkNmKLKhlHcpDntTYb6THk'
  }
})
Vue.use(Vuetify)
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)

Vue.http.interceptors.push(function (request, next) {
  console.log('intercepting...')
  console.log(request)
  if (localStorage.user) {
    request.headers.set('Authorization', JSON.parse(localStorage.user).token)
  }
})

// Vue.use(NProgress)
// Vue.http.options.root = 'http://localhost:6001/'
Vue.mixin({
  methods: {
    addDays,
    subDays,
    parse,
    dateFormat (date) {
      if (date instanceof Date) {
        return date.toISOString().substring(0, 10)
      } else {
        console.log('Not valid date, function recieves a date object')
        return ''
      }
    }
  }
})
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const privatePages = ['/reservation', '/account']
  let authRequired = false
  privatePages.forEach(function (e) {
    if (to.path.includes(e)) {
      authRequired = true
    }
  })
  // const authRequired = privatePages.includes(to.path)
  const loggedIn = localStorage.getItem('user')
  if (authRequired && !loggedIn) {
    return next({ name: 'login' })
  }
  next()
})
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})
router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

Vue.component('v-header', Header)
Vue.component('v-homepage-header', HomepageHeader)
Vue.component('v-footer', Footer)
Vue.component('v-basic-search', BasicSearch)
Vue.component('v-big-card', BigCard)
Vue.component('v-small-card', SmallCard)
Vue.component('v-host-profile-navigation', HostProfileNavigationDrawer)
Vue.component('v-user-profile-navigation', UserProfileNavigationDrawer)
Vue.component('v-notation-stars', NotationStars)
Vue.component('v-comment', NormalComment)
Vue.component('v-image-uploader', ImageUploader)
Vue.component('v-reservation-details', ReservationDetails)
Vue.component('v-loading', Loading)
Vue.component('v-account-notifications', AccountNotifications)
Vue.component('el-atypik-select', AtypikSelect)
Vue.component('el-atypik-carousel', AtypikCarousel)
Vue.component('el-swiper', SwiperSlide)
Vue.component('el-date-range-picker', DateRangePicker)
Vue.component('el-reservation-ariane', ReservationAriane)
Vue.component('el-price-details', PriceDetails)
Vue.component('v-flashbag', FlashBag)
Vue.component('v-password-confirmation', PasswordConfirmation)
Vue.component('v-reservation-calendar', ReservationCalendar)
Vue.component('v-photo-gallery', PhotoGallery)
Vue.component('v-google-maps', GoogleMaps)
Vue.component('v-atypik-alert', AtypikAlert)

// Vue.component('el-rotate-square', RotateSquare2)
// Vue.component('origami-loader', Origami)

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
