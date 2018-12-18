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
import axios from 'axios'

Vue.use(Vuetify)
Vue.use(BootstrapVue)

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  axios,
  render: h => h(App)
})
