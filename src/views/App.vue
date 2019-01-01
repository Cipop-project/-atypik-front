<template>
  <v-app class="full-width center-content">
    <router-view/>
  </v-app>
</template>
<script>

import HomepageView from './HomepageView.vue'
import NotFoundView from './NotFoundView.vue'

export default {
  components: {
    HomepageView,
    NotFoundView
  }
}
</script>

<style scoped>
  a, a:hover {
    text-decoration: none;
  }
</style>
