<template>
  <div>
    <v-homepage-header/>
    <v-img
      :src="homepage.mainImage"
      alt="logement inedit sur la cote d'un lac"
      max-height="800"
      gradient="to top, rgba(100,115,201,.0), rgba(0,0,0,.4)">
      <v-layout
        justify-center
        align-center
        fill-height>
        <v-basic-search/>
      </v-layout>
    </v-img>
    <v-container
      fluid
      mt-5>
      <v-layout
        fill-height
        justify-center>
        <v-flex md10>
          <h3>Les plus populaires</h3>
          <swiper :options="swiperOption">
            <swiper-slide
              v-for="(slide, index) in popularZones"
              :key="index">
              <v-big-card :slide="slide"/>
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
        </v-flex>
      </v-layout>
      <v-layout
        fill-height
        justify-center
        mt-5>
        <v-flex md10>
          <h3>Les types de logements</h3>
          <swiper :options="swiperOption">
            <swiper-slide
              v-for="(slide, index) in homeTypes"
              :key="index">
              <v-big-card :slide="slide"/>
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
        </v-flex>
      </v-layout>
      <v-layout
        fill-height
        justify-center
        mt-5>
        <v-flex md10>
          <h3>Les meilleures logements</h3>
          <swiper :options="swiperOption">
            <swiper-slide
              v-for="(slide, index) in bestHomes"
              :key="index">
              <v-small-card :item="slide"/>
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
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer/>
  </div>
</template>

<script>
export default {
  name: 'HomepageView',
  data () {
    return {
      swiperOption: {
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
      },
      images: [
        {
          src: '/static/img/home_img_1.jpg'
        },
        {
          src: '/static/img/home_img_2.jpg'
        }
      ]
    }
  },
  computed: {
    homepage () {
      return this.$store.state.homepage
    },
    popularZones () {
      return this.$store.state.popularZones
    },
    bestHomes () {
      return this.$store.state.bestHomes
    },
    homeTypes () {
      return this.$store.state.homeTypes
    }
  }
}
</script>

<style scoped>
  .header {
    margin-bottom: 0px;
  }
</style>
