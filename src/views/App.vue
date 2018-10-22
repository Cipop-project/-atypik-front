<template>
  <div class="full-width center-content">
    <router-view/>
  </div>
</template>
<script>
import HomepageView from './HomepageView.vue'
import LoginView from './index/LoginView.vue'
export default {
  components: {
    HomepageView,
    LoginView
  }
}
</script>
