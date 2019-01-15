import Vue from 'vue'
import Router from 'vue-router'
import HomepageView from '../views/index/HomepageView.vue'
import NotFoundView from '../views/index/NotFoundView.vue'
import LoginView from '../views/index/LoginView.vue'
import RegisterView from '../views/index/RegisterView.vue'
import SearchView from '../views/index/SearchView.vue'
import AccountSummaryView from '../views/account/AccountSummaryView.vue'
import HomesView from '../views/HomesView.vue'
// import AccountView from '../views/account/AccountView.vue'
import AccountEditView from '../views/account/AccountEditView.vue'
import AccountParametersView from '../views/account/AccountParametersView.vue'
import AccountAddHomeView from '../views/account/AccountAddHomeView.vue'
import AccountEditHomesView from '../views/account/AccountEditHomesView.vue'
import ReservationFirstStepView from '../views/reservation/ReservationFirstStepView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/login', name: 'login', component: LoginView },
    { path: '/signin', name: 'signin', component: RegisterView },
    { path: '/search', name: 'search', component: SearchView, props: true },
    { path: '/homes/:home_slug', name: 'home-details', component: HomesView },
    { path: '/', name: 'homepage', component: HomepageView },
    { path: '/reservation/first_step', name: 'reservation', component: ReservationFirstStepView },
    { path: '/host/', name: 'host', component: NotFoundView },
    { path: '/about/', name: 'about', component: NotFoundView },
    { path: '/account/', name: 'account', component: AccountSummaryView },
    { path: '/account/edit', name: 'editAccount', component: AccountEditView },
    { path: '/account/settings', name: 'configAccount', component: AccountParametersView },
    { path: '/account/homes/add', name: 'addHomes', component: AccountAddHomeView },
    { path: '/account/homes/edit', name: 'editHomes', component: AccountEditHomesView },
    { path: '/about/conditions', name: 'conditions', component: NotFoundView }
  ]
})
