import LoginView from './LoginView.vue'
import SigninView from './RegisterView.vue'

export default [
  { path: 'login', component: LoginView, name: `login` },
  { path: 'signin', component: SigninView, name: `signin` }
]
