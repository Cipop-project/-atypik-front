<template>
  <div>
    <v-header/>
    <v-container fluid>
      <v-layout justify-center>
        <v-flex
          xs10
          m10>
          <v-loading :is-loading="loading"/>
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
        productId: JSON.parse(localStorage.reservation).product_id,
        amount: 0
      },
      loading: false,
      command: {}
    }
  },
  beforeMount () {
    if (!this.$store.state.loggedIn) {
      this.$router.push({ name: 'login' })
    }
  },
  async mounted () {
    this.loading = true
    const { data } = await Resource.readProduct(this.reservation.productId)
    let days = this.differenceInDays(this.getUTCDate(JSON.parse(localStorage.reservation).end_date), this.getUTCDate(JSON.parse(localStorage.reservation).start_date))
    this.reservation.amount = data.data.amount * days
    const data2 = await this.createCommand()
    this.reservation = data2.body.data
    const { data3 } = Resource.createCommandPayment(data2.body.data.id)
    console.log(data3)
    this.loading = false
  },
  methods: {
    async createCommand () {
      const data = await Resource.createCommand(this.reservation)
      console.log(data)
      return data
    }
  }
}
</script>

<style scoped>

</style>
