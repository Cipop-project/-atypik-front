import Vue from 'vue'
import Router from 'vue-router'
import HomepageView from '../views/HomepageView.vue'
import LoginView from '../views/index/LoginView.vue'
import SigninView from '../views/index/SigninView.vue'
import SearchView from '../views/index/SearchView.vue'

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
      path: '/signin',
      name: 'signin',
      component: SigninView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/product/details',
      name: 'product-details',
      component: SearchView
    },
    {
      path: '/',
      name: 'homepage',
      component: HomepageView
    }
  ]
})
