<template>
  <v-img
    :src="slide.img">
    <v-layout
      align-end
      justify-center
      row
      fill-height>
      <v-card
        class="card-layout transparent mb-2 pa-2">
        <h3 class="white--text text-xs-center">{{ slide.title }}</h3>
        <h5 class="white--text text-xs-center ">{{ slide.count }} Logements</h5>
      </v-card>
    </v-layout>
  </v-img>
</template>

<script>
export default {
  name: 'BigCard',
  props: {
    slide: {
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
