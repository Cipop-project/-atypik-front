<template>
  <v-app class="full-width center-content">
    <Header/>
    <v-container fluid>
      <router-view/>
    </v-container>
  </v-app>
</template>
<script>
import Header from '../components/Header.vue'

import HomepageView from './HomepageView.vue'
import LoginView from './index/LoginView.vue'

export default {
  components: {
    HomepageView,
    LoginView,
    Header
  }
}
</script>
