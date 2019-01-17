<template>
  <div class="price-box">
    <p>Prix de base: <span class="text-xs-right">{{ price }}€</span></p>
    <p
      v-for="(discount, i) in discounts"
      :key="i"
      class="reservation-box pl-4 ma-0">
      {{ discount.name }}: <span class="text-xs-right">- {{ discount.price }}€</span>
    </p>
    <p class="mt-3">Prix total: <span class="text-xs-right">0€</span></p>
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
