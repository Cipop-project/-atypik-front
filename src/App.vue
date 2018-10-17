<template>
  <div class="full-width center-content">
    <router-view/>
  </div>
</template>
<script>
import HelloComponent from './components/HelloComponent.vue'
import LoginComponent from './components/LoginComponent.vue'
export default {
  components: {
    HelloComponent,
    LoginComponent
  }
}
</script>
