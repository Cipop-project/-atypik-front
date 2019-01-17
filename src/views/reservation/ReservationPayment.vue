<template>
  <div>
    <v-header/>
    <v-container fluid>
      <v-layout justify-center>
        <v-flex
          xs10
          m10>
          <h2>Vous allez etre redirigé vers le site du paiement de votre choix...</h2>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer/>
  </div>
</template>

<script>
import Resource from '../../resources'
export default {
  name: 'ReservationPaymentView',
  data () {
    return {
      reservation: {
        clientId: this.$store.state.user.id,
        endTime: JSON.parse(localStorage.reservation).end_date + 'T00:00:00.000Z',
        startTime: JSON.parse(localStorage.reservation).start_date + 'T00:00:00.000Z',
        productId: JSON.parse(localStorage.reservation).product_id
      },
      reservationStatus: 1
    }
  },
  beforeMount () {
    if (!this.$store.state.loggedIn) {
      this.$router.push({ name: 'login' })
    }
  },
  async mounted () {
    console.log(this.reservation)
    this.reservationStatus = await this.createCommand()
  },
  methods: {
    async createCommand () {
      const data = await Resource.createCommand(this.reservation)
      console.log(data)
      return data.status
    }
  }
}
</script>

<style scoped>

</style>
