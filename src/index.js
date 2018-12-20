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
// import VeeValidate from 'vee-validate'
import { store } from './store'
import Header from './components/Header.vue'
import HomepageHeader from './components/HomepageHeader.vue'
import Footer from './components/Footer.vue'

Vue.use(Vuetify)
Vue.use(BootstrapVue)
Vue.use(VueResource)
// Vue.use(VeeValidate)

Vue.component('v-header', Header)
Vue.component('v-homepage-header', HomepageHeader)
Vue.component('v-footer', Footer)

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
