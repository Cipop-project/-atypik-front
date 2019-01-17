<template>
  <v-layout>
    <v-flex>
      <h1>Coordonnées de facturation</h1>
      <br>
      <v-text-field label="Prenom"/>
      <v-text-field label="Nom"/>
      <v-text-field label="Addresse"/>
      <v-text-field label="Code postal"/>
      <v-text-field label="Ville"/>
      <v-text-field label="Pays"/>
      <v-text-field label="Numero de telephone"/>
      <v-text-field label="Email"/>
    </v-flex>
  </v-layout>
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
