<template>
  <div>third step here</div>
</template>

<script>
export default {
  name: 'ReservationFirstStepVue',
  mounted () {
    this.$parent.$emit('update:step', 3)
  }
}
</script>

<style scoped>

</style>
