<template>
  <v-app class="full-width center-content">
    <router-view/>
  </v-app>
</template>
<script>

import HomepageView from './index/HomepageView.vue'
import NotFoundView from './index/NotFoundView.vue'

export default {
  components: {
    HomepageView,
    NotFoundView
  }
}
</script>

<style scoped>
  a {
    color: black;
    text-decoration: none;
  }
</style>
