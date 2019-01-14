<template>
  <swiper
    :options="options">
    <swiper-slide
      v-for="(slide, index) in slides"
      :key="index">
      <v-small-card
        v-if="type==='small-card'"
        :item="slide"/>
      <v-big-card
        v-if="type==='big-card'"
        :item="slide"/>
    </swiper-slide>
    <div
      slot="pagination"
      class="swiper-pagination"/>
    <div
      slot="button-prev"
      class="swiper-button-prev"/>
    <div
      slot="button-next"
      class="swiper-button-next"/>
    <div
      slot="pagination"
      class="swiper-pagination"/>
  </swiper>
</template>

<script>
export default {
  name: 'SwiperSlideView',
  props: {
    options: {
      type: Object,
      required: true,
      default: function () {
        return {
          slidesPerView: 4,
          spaceBetween: 50,
          loop: false,
          loopFillGroupWithBlank: false,
          slidesPerGroup: 3,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    slides: {
      type: Array,
      required: true
    },
    index: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'big-card'
    }
  }
}
</script>

<style scoped>

</style>
