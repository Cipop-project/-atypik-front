<template>
  <v-app class="full-width center-content">
    <router-view/>
  </v-app>
</template>
<script>

import HomepageView from './HomepageView.vue'
import NotFoundView from './NotFoundView.vue'
import LoginView from './index/LoginView.vue'

export default {
  components: {
    HomepageView,
    NotFoundView,
    LoginView
  }
}
</script>

<style scoped>
</style>
