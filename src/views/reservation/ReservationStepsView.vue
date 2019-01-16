<template>
  <div>
    <v-header/>
    <v-container fluid>
      <v-layout justify-center>
        <v-flex
          xs10
          sm10>
          <el-reservation-ariane :step="step"/>
          <v-layout
            class="step-box"
            elevation-1
            pa-5>
            <router-view :people="people"/>
          </v-layout>
          <v-layout
            class="ml-4 mr-4 mt-4"
            justify-center>
            <v-flex text-xs-center>
              <v-btn :to="prevStep()">Retour</v-btn>
            </v-flex>
            <v-flex text-xs-center>
              <v-btn
                :to="nextStep()"
                right>Suivant</v-btn>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer/>
  </div>
</template>

<script>
export default {
  name: 'ReservationStepsView',
  data () {
    return {
      step: 1,
      people: 2,
      product: 'product_1001'
    }
  },
  mounted () {
    this.$on('update:step', (st) => {
      console.log('update step ' + st)
      this.step = st
    })
  },
  methods: {
    prevStep () {
      if (this.step === 2) {
        return 'first_step'
      } else if (this.step === 3) {
        return 'second_step'
      } else {
        return '../homes/' + this.product
      }
    },
    nextStep () {
      if (this.step === 1) {
        return 'second_step'
      } else if (this.step === 2) {
        return 'third_step'
      } else {
        return 'payment'
      }
    }
  }
}
</script>

<style scoped>
.step-box {
  background-color: #fff;
}
</style>
