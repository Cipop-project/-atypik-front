<template>
  <div>
    <h3>{{ reservation.product_name }}</h3>
    {{ reservation.start_date }}
    <br>
    {{ reservation.end_date }}
    <br>
    {{ reservation.people }}
  </div>
</template>

<script>
export default {
  name: 'ReservationDetailsView',
  props: {
    reservation: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
