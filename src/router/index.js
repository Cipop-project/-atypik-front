import Vue from 'vue'
import Router from 'vue-router'
import HelloComponent from '../components/HelloComponent.vue'
import LoginComponent from '../components/LoginComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: LoginComponent
    },
    {
      path: '/',
      name: 'Hello',
      component: HelloComponent
    }
  ]
})
