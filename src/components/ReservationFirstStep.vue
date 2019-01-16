<template>
  <v-layout>
    <v-flex>
      <h2>Coordonnées des ocupants</h2>
      <br>
      <div
        v-for="i in people"
        :key="i"
        class="mt-2 mb-2">
        <h4>Ocupant N° {{ i }}</h4>
        <span
          v-if="i === 1"
          class="red--text">Ocupant principal</span>
        <v-text-field label="Prenom"/>
        <v-text-field label="Nom"/>
        <v-text-field label="Date de naissance"/>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ReservationFirstStepVue',
  props: {
    people: {
      type: Number,
      required: true
    }
  },
  // data () {
  //   return {
  //     reservation: {
  //       people: 2
  //     }
  //   }
  // },
  mounted () {
    this.$parent.$emit('update:step', 1)
  }
}
</script>

<style scoped>

</style>
