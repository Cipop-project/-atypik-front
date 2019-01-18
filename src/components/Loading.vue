<template>
  <loading
    :active.sync="isLoading"
    :can-cancel="false"
    :is-full-page="false"
    :opacity="fullPage === true ? 0.5 : 0"/>
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
  },
  data () {
    return {
      opacity: 0.5
    }
  }
}
</script>

<style scoped>

</style>
