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
              <v-layout >
                <v-flex md3>
                  <v-avatar
                    size="200">
                    <v-img
                      :src="user.photo"
                      class="justify-center"
                      alt="profile picture"/>
                  </v-avatar>
                </v-flex>
                <v-flex md9>
                  <h3>{{ user.name }} {{ user.last_name }}</h3>
                  <h4>
                    <b>Membre depuis: {{ user.inscription_date }}<br>{{ user.location }}</b><v-notation-stars
                      v-if="user.type == 'host'"
                      :note="user.note"/>
                  </h4>
                  <p>{{ user.description }}</p>
                </v-flex>
              </v-layout>
              <v-layout
                v-if="user.type== 'host'"
                mt-5>
                <v-flex
                  xs12
                  mt-4>
                  <h3>Logements proposées par {{ user.name }}</h3>
                  <hr>
                  <swiper :options="swiperOption">
                    <swiper-slide
                      v-for="(slide, index) in user.homes"
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
              <v-layout
                mt-5>
                <v-flex
                  xs12
                  mt-4>
                  <h3>Commentaires</h3>
                  <span
                    v-for="(comment, index) in user.comments"
                    :key="index">
                    <hr>
                    <v-comment :comment="comment"/>
                  </span>
                </v-flex>
              </v-layout>
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
  name: 'AccountSummaryView',
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
      }
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>

</style>
