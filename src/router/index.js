import Vue from 'vue'
import Router from 'vue-router'
import HomepageView from '../views/HomepageView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import LoginView from '../views/index/LoginView.vue'
import SigninView from '../views/index/RegisterView.vue'
import SearchView from '../views/index/SearchView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/',                   name: 'homepage',         component: HomepageView},
    {path: '/login',              name: 'login',            component: LoginView},
    {path: '/signin',             name: 'signin',           component: SigninView},
    {path: '/search',             name: 'search',           component: SearchView},
    {path: '/product/details',    name: 'product-details',  component: SearchView},
    {path: '/host/',              name: 'host',             component: NotFoundView},
    {path: '/about/',             name: 'about',            component: NotFoundView},
    {path: '/about/conditions',   name: 'cgu-cgv',          component: NotFoundView}
  ]
})
