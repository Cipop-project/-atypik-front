import Vue from 'vue'
import Router from 'vue-router'
import HomepageView from '../views/HomepageView.vue'
import LoginView from '../views/index/LoginView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'homepage',
      component: HomepageView
    }
  ]
})
