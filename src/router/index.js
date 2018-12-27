import Vue from 'vue'
import Router from 'vue-router'
import HomepageView from '../views/HomepageView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import LoginView from '../views/index/LoginView.vue'
import RegisterView from '../views/index/RegisterView.vue'
import SearchView from '../views/index/SearchView.vue'
import AccountSummaryView from '../views/account/AccountSummaryView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/login', name: 'login', component: LoginView },
    { path: '/signin', name: 'signin', component: RegisterView },
    { path: '/search', name: 'search', component: SearchView },
    { path: '/product/details', name: 'product-details', component: SearchView },
    { path: '/', name: 'homepage', component: HomepageView },
    { path: '/host/', name: 'host', component: NotFoundView },
    { path: '/about/', name: 'about', component: NotFoundView },
    { path: '/account/', name: 'account', component: AccountSummaryView },
    { path: '/about/conditions', name: 'cgv-cgu', component: NotFoundView }
  ]
})
