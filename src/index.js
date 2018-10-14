import Vue from 'vue'
import App from './App.vue'
import '../assets/index.sass'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
