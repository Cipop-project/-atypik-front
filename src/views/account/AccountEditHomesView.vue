<template>
  <div>
    <v-header/>
    <v-container fluid>
      <v-layout justify-center>
        <v-flex xs10>
          <v-layout>
            <v-flex md2>
              <v-layout v-if="user.type=='host'">
                <v-host-profile-navigation/>
              </v-layout>
              <v-layout v-else>
                <v-user-profile-navigation/>
              </v-layout>
            </v-flex>
            <v-flex
              md10
              class="pa-4 pl-5">
              <swiper :options="swiperOption">
                <swiper-slide
                  v-for="(slide, index) in user.homes"
                  :key="index">
                  <router-link :to="`/homes/${slide.product_id}`">
                    <v-small-card
                      :item="slide"/>
                  </router-link>
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
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer/>
  </div>
</template>

<script>
export default {
  name: 'AccountAddHomeView',
  data () {
    return {
      user: this.$store.state.user,
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
      }
    }
  },
  methods: {
    formatMoney (e) {
      if (!isNaN(e.key)) {
        console.log(e.key)
      }
    }
  }
}
</script>

<style scoped>

</style>
