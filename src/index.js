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
import 'flag-icon-css/css/flag-icon.css'
import VueResource from 'vue-resource'
import NotationStars from './components/NotationStars.vue'
// import VeeValidate from 'vee-validate'
import { store } from './store'
import Header from './components/Header.vue'
import HomepageHeader from './components/HomepageHeader.vue'
import BasicSearch from './components/BasicSearch.vue'
import BigCard from './components/BigCard.vue'
import SmallCard from './components/SmallCard.vue'
import HostProfileNavigationDrawer from './components/HostProfileNavigationDrawer.vue'
import UserProfileNavigationDrawer from './components/UserProfileNavigationDrawer.vue'
import NormalComment from './components/NormalComment.vue'
import Footer from './components/Footer.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(Vuetify)
Vue.use(BootstrapVue)
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)
// Vue.use(VeeValidate)

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

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
