<template>
  <div class="price-box">
    <p>Prix par nuit: <span class="text-xs-right">{{ price }}€</span></p>
    <p class="reservation-box pl-4 ma-0">Nombre de nuits: <span class="text-xs-right"> {{ days }}</span></p>
    <p class="mt-3">Prix total: <span class="text-xs-right">{{ Math.round(price * days * 100)/100 }}€</span></p>
  </div>
</template>

<script>
export default {
  name: 'PriceDetails',
  props: {
    discounts: {
      type: Array,
      required: false,
      default () {
        return []
      }
    },
    price: {
      type: Number,
      required: true
    },
    days: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.price-box {
  font-size: 1.5em;
}
.reservation-box {
  font-size: 0.8em;
}
.text-xs-right {
  float: right;
}
</style>
