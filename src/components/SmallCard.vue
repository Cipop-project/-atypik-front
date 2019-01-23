<template>
  <v-card
    flat
    class="card elevation-1">
    <v-img
      :src="defaultImg"
      height="150"/>
    <v-card-title primary-title>
      <div>
        <h5 class="mb-0">{{ item.name }}</h5>
        <span class="grey--text">{{ item.city }}</span>
        <br>
        <!--<v-notation-stars :note="item.note === undefined ? 0 : item.note"/>-->
      </div>
    </v-card-title>
    <v-card-text>{{ item.amount }}€ par nuit</v-card-text>
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
  },
  computed: {
    defaultImg () {
      if (this.item.images.length > 0) {
        return this.item.images[0].addressUrl
      } else {
        return this.$store.state.homepage.mainImage
      }
    }
  }
}
</script>

<style scoped>
  .card {
    height: 350px;
  }
</style>
