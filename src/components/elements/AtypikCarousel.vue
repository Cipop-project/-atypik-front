<template>
  <v-carousel
    next-icon="mdi-chevron-right"
    prev-icon="mdi-chevron-left"
    delimiter-icon="mdi-record">
    <!--<v-carousel-item-->
      <!--v-for="(item, customkey) in items"-->
      <!--:key="customkey"-->
      <!--:src="item[src]"/>-->
    <v-carousel-item src="/static/img/home.jpg"/>
  </v-carousel>
</template>

<script>
export default {
  name: 'AtypikCarouselView',
  props: {
    items: {
      type: Array,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    customkey: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    // getSrc () {
    //   return item
    // }
  }
}
</script>

<style scoped>

</style>
