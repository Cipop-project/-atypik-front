<template>
  <div>
    <v-header/>
    <v-container fluid>
      <v-layout justify-center>
        <v-flex
          xs10
          sm10>
          <el-reservation-ariane :step="step"/>
          <v-layout justify-space-between>
            <v-flex
              md9
              mr-5
              pa-5
              elevation-1
              class="step-box">
              <router-view :people="reservation.people"/>
            </v-flex>
            <v-flex
              md3
              pt-3
              elevation-1
              class="step-box">
              <h2 class="text-xs-center">Votre commande</h2>
              <hr>
              <v-layout pa-4>
                <v-reservation-details
                  :reservation="reservation"/>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex md8>
              <v-layout
                class="ml-4 mr-4 mt-4"
                justify-center>
                <v-flex text-xs-center>
                  <v-btn
                    :to="prevStep()"
                    color="primary">Retour</v-btn>
                </v-flex>
                <v-flex text-xs-center>
                  <v-btn
                    :to="nextStep()"
                    right
                    color="success">Suivant</v-btn>
                </v-flex>
              </v-layout>
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
      reservation: {
        product_name: '',
        product_id: '',
        start_date: '',
        end_date: '',
        people: 1
      }
    }
  },
  mounted () {
    // this.$route.params.reservation = JSON.parse(localStorage.reservation)
    // this.$route.params.reservation.people = parseInt(this.$route.params.reservation.people)
    this.reservation = JSON.parse(localStorage.reservation)
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
        return '../homes/' + this.reservation.product_id
      }
    },
    nextStep () {
      if (this.step === 1) {
        let ell = JSON.parse(localStorage.reservation)
        ell.people_info = this.$store.state.people_info
        // localStorage.reservation = JSON.stringify(JSON.parse(localStorage.reservation).people_info = this.$store.state.people_info)
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
