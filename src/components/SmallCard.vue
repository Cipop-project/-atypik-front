<template>
  <v-card
    flat
    class="card elevation-1">
    <v-img
      :src="item.img"
      height="150"/>
    <v-card-title primary-title>
      <div>
        <h5 class="mb-0">{{ item.name }}</h5>
        <span class="grey--text">{{ item.location }}</span>
        <br>
        <v-notation-stars :note="item.note"/>
      </div>
    </v-card-title>
    <v-card-text>{{ item.price }} par nuit</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'SmallCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .card {
    height: 350px;
  }
</style>
