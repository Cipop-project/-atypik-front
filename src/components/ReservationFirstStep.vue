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
        <v-text-field
          v-model="people_info[i - 1].first_name"
          label="Prenom"/>
        <v-text-field
          v-model="people_info[i - 1].last_name"
          label="Nom"/>
        <v-text-field
          v-model="people_info[i - 1].birthday"
          label="Date de naissance"/>
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
  data () {
    return {
      people_info: [{ first_name: '', last_name: '', birthday: '' }]
      // people_info: this.$store.state.people_info
    }
  },
  watch: {
    people: function () {
      this.people_info =  new Array(this.people).fill({ first_name: '', last_name: '', birthday: '' })
    }
  },
  // beforeMount () {
  //   for (let i = 0; i < this.people; i++) {
  //     this.people_info[i] = {
  //       first_name: '',
  //       last_name: '',
  //       birthday: ''
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
