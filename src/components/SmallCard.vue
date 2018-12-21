<template>
  <v-card
    flat
    class="elevation-1">
    <v-img
      :src="item.img"
      height="150"/>
    <v-card-title primary-title>
      <div>
        <h4 class="mb-0">{{ item.name }}</h4>
        <span class="grey--text">{{ item.location }}</span>
        <br>
        <v-notation-stars :note="item.note"/>
      </div>
    </v-card-title>
    <v-card-text>{{ item.price }} par nuit</v-card-text>
  </v-card>
</template>

<script>
import NotationStars from './NotationStars.vue'

export default {
  name: 'SmallCard',
  components: {
    'v-notation-stars': NotationStars
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .card-layout {
    background-color: rgba(0, 0, 0, 0.20)!important;
    border: 2px solid lightgray!important;
    /*border-right: 3px solid ghostwhite!important;*/
    border-style: ridge!important;
  }
</style>
