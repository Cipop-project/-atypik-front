<template>
  <div
    v-if="flashbag.show"
    ref="flashbag">
    <div
      v-if="flashbag.type === 'success'"
      class="green--text">
      {{ flashbag.message }}
    </div>
    <div
      v-else-if="flashbag.type === 'error'"
      class="red">
      {{ flashbag.message }}
    </div>
    <div
      v-else
      class="orange--text">
      {{ flashbag.message }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlashBagView',
  props: {
    flashbag: {
      type: Object,
      required: true
    }
  },
  updated () {
    if (this.flashbag.show) {
      this.$refs.flashbag.scrollIntoView()
    }
  }
}
</script>

<style scoped>

</style>
