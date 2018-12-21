import Vue from 'vue'
import App from './views/App.vue'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import 'font-awesome/css/font-awesome.css';
import './app.css';

import Vue from 'vue'
import App from './views/App.vue'
import router from './router'
import store from './store'
import i18n from './i18n/index'
import formatters from './formatters'
import ElementUI from 'element-ui'
import components from './components'
import storage from './storage'
import AsyncComputed from 'vue-async-computed'
import VueFullScreen from 'vue-fullscreen'

import Header from './components/Header.vue'
import HomepageHeader from './components/HomepageHeader.vue'
import Footer from './components/Footer.vue'

// Plugins
Vue.use(ElementUI)
Vue.use(formatters)
Vue.use(components)
Vue.use(AsyncComputed)
Vue.use(VueFullScreen)
Vue.use(storage)

// Vue.use(Vuetify)
// Vue.use(BootstrapVue)
// Vue.use(VueResource)
// Vue.use(VeeValidate)

Vue.component('v-header', Header)
Vue.component('v-homepage-header', HomepageHeader)
Vue.component('v-footer', Footer)

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  render: h => h(App)
})
