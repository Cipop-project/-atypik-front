<template>
  <v-layout>
    <v-flex>
      <h2>Confirmez votre commande pour passer au paiement</h2>
    </v-flex>
  </v-layout>
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
