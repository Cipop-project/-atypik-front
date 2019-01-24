<template>
  <v-layout>
    <v-flex>
      <h3>CONFIRMATION</h3>
      <p>Votre commande a été accepté, nous vous remercions de nous avoir choisi pour planifier votre voyage de rêve.</p>
      <v-layout justify-center>
        <v-flex
          xs12
          md6>
          <v-img :src="product.images.length > 0 ? product.images[0].addressUrl : '/static/img/home.jpg'"/>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'ReservationPaymentSuccessVue',
  data () {
    return {
      reservation: {},
      product: {
        images: []
      }
    }
  }
}
</script>

<style scoped>

</style>
