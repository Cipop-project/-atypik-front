<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-flex
        xs4
        md3>
        <div
          v-if="step === 1"
          class="ariane-box selected">
          Ocupants
        </div>
        <div
          v-else
          class="ariane-box">
          Ocupants
        </div>
      </v-flex>
      <v-flex
        xs4
        md3>
        <div
          v-if="step === 2"
          class="ariane-box selected">
          Coordonnées
        </div>
        <div
          v-else
          class="ariane-box">
          Coordonnées
        </div>
      </v-flex>
      <v-flex
        xs4
        md3>
        <div
          v-if="step === 3"
          class="ariane-box selected">
          Confirmation & Paiement
        </div>
        <div
          v-else
          class="ariane-box">
          Confirmation & Paiement
        </div>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  name: 'ReservationArianeView',
  props: {
    step: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.ariane-box {
  border-radius: 10px;
  color: #FFF;
  text-align: center;
  height: 50px;
  line-height: 50px;
  background-color: #8b6841;
  margin-left: 5%;
  margin-right: 5%;
}
  .ariane-box.selected {
    background-color: saddlebrown;
  }
</style>
