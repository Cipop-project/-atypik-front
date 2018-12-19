<template>
  <v-app class="full-width center-content">
    <Header/>
    <router-view/>
    <Footer/>
  </v-app>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import HomepageView from './HomepageView.vue'
import NotFoundView from './NotFoundView.vue'
import LoginView from './index/LoginView.vue'

export default {
  components: {
    HomepageView,
    NotFoundView,
    LoginView,
    Header,
    Footer
  }
}
</script>

<style scoped>
</style>
