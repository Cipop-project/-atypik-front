<template>
  <div>
    <v-alert
      :value="show"
      :type="type"
      :icon="icon">{{ message }}</v-alert>
  </div>
</template>

<script>
export default {
  name: 'AtypikAlert',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      icon: 'mdi-information'
    }
  },
  watch: {
    type: function (v) {
      this.icon = v === 'success' ? 'mdi-check-circle' : v === 'info' ? 'mdi-information' : v === 'error' ? 'mdi-comment-alert' : v === 'warning' ? 'mdi-information' : ''
    }
  }
}
</script>

<style scoped>

</style>
