<template>
  <loading
    :active.sync="isLoading"
    :can-cancel="false"
    :is-full-page="fullPage"/>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  name: 'LoadingVue',
  components: {
    Loading
  },
  props: {
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    },
    fullPage: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
