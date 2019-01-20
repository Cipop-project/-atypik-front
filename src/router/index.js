import Vue from 'vue'
import Router from 'vue-router'
import HomepageView from '../views/index/HomepageView.vue'
import NotFoundView from '../views/index/NotFoundView.vue'
import LoginView from '../views/index/LoginView.vue'
import RegisterView from '../views/index/RegisterView.vue'
import SearchView from '../views/index/SearchView.vue'
import AccountSummaryView from '../views/account/AccountSummaryView.vue'
import HomesView from '../views/index/HomesView.vue'
// import AccountView from '../views/account/AccountView.vue'
import AccountEditView from '../views/account/AccountEditView.vue'
import AccountParametersView from '../views/account/AccountParametersView.vue'
import AccountAddHomeView from '../views/account/AccountAddHomeView.vue'
import AccountEditHomesView from '../views/account/AccountEditHomesView.vue'
import ReservationStepsView from '../views/reservation/ReservationStepsView.vue'
import ReservationFirstStep from '../components/ReservationFirstStep.vue'
import ReservationSecondStep from '../components/ReservationSecondStep.vue'
import ReservationThirdStep from '../components/ReservationThirdStep.vue'
import ReservationPayment from '../views/reservation/ReservationPayment.vue'
import AccountEditHomeView from '../views/account/AccountEditHomeView.vue'
import AccountView from '../views/account/AccountView.vue'
import AccountMessagesView from '../views/account/AccountMessagesView.vue'
import AccountReservationCalendarView from '../views/account/AccountReservationCalendarView.vue'
import AccountReservationDetailsView from '../views/account/AccountReservationDetailsView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/login', name: 'login', component: LoginView },
    { path: '/signin', name: 'signin', component: RegisterView },
    { path: '/signin/confirmation', name: 'signinConfirmation', component: RegisterView },
    { path: '/search', name: 'search', component: SearchView, props: true },
    { path: '/homes/:home_slug', name: 'homeDetails', component: HomesView },
    { path: '/', name: 'homepage', component: HomepageView },
    { path: '/reservation',
      component: ReservationStepsView,
      children: [
        {
          path: 'first_step',
          component: ReservationFirstStep,
          name: 'reservation'
        },
        {
          path: 'second_step', component: ReservationSecondStep
        },
        {
          path: 'third_step', component: ReservationThirdStep
        }
      ]
    },
    { path: '/reservation/payment', name: 'payment', component: ReservationPayment },
    { path: '/host/', name: 'host', component: NotFoundView },
    { path: '/about/', name: 'about', component: NotFoundView },
    { path: '/contact/', name: 'contact', component: NotFoundView },
    { path: '/account',
      component: AccountView,
      children: [
        { path: '', name: 'account', component: AccountSummaryView },
        { path: 'reservations/calendar', name: 'reservationCalendar', component: AccountReservationCalendarView, props: true },
        { path: 'reservations/details', name: 'reservationDetails', component: AccountReservationDetailsView },
        { path: 'edit', name: 'editAccount', component: AccountEditView },
        { path: 'messages', name: 'messages', component: AccountMessagesView },
        { path: 'settings', name: 'configAccount', component: AccountParametersView },
        { path: 'homes/add', name: 'addHomes', component: AccountAddHomeView },
        { path: 'homes/edit', name: 'editHomes', component: AccountEditHomesView },
        { path: 'homes/edit/:home_slug', name: 'editHome', component: AccountEditHomeView }
      ]
    },
    { path: '/about/conditions', name: 'conditions', component: NotFoundView },
    { path: 'https://www.facebook.com', name: 'facebook', component: NotFoundView },
    { path: 'https://www.twitter.com', name: 'twitter', component: NotFoundView },
    { path: 'https://www.instagram.com', name: 'instagram', component: NotFoundView },
    { path: '*', name: 'notFound', component: NotFoundView }
  ]
})
