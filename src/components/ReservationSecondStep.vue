<template>
  <div>second step here</div>
</template>

<script>
export default {
  name: 'ReservationFirstStepVue',
  mounted () {
    this.$parent.$emit('update:step', 2)
  }
}
</script>

<style scoped>

</style>
