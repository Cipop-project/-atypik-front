<template>
  <div>
    <v-layout >
      <v-flex md3>
        <v-avatar
          size="200">
          <v-img
            :src="user.iconAddressUrl ? user.iconAddressUrl : '/static/img/user_placeholder.png'"
            class="justify-center"
            alt="profile picture"/>
        </v-avatar>
      </v-flex>
      <v-flex md9>
        <h3>{{ user.firstName }} {{ user.lastName }}</h3>
        <h4>
          <b>Membre depuis: {{ created }}
            <br>
            <br>
          </b>
          <!--<v-notation-stars-->
          <!--v-if="user.type == 'host'"-->
          <!--:note="user.note"/>-->
        </h4>
        <p>{{ user.description }}</p>
      </v-flex>
    </v-layout>
    <v-layout
      v-if="user.type== 'LANDLORD'"
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
    <!--<v-layout-->
    <!--mt-5>-->
    <!--<v-flex-->
    <!--xs12-->
    <!--mt-4>-->
    <!--<h3>Commentaires</h3>-->
    <!--<span-->
    <!--v-for="(comment, index) in user.comments"-->
    <!--:key="index">-->
    <!--<hr>-->
    <!--<v-comment :comment="comment"/>-->
    <!--</span>-->
    <!--</v-flex>-->
    <!--</v-layout>-->
  </div>
</template>

<script>
import moment from 'moment'
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
      },
      created: '',
      user: this.$store.state.user
    }
  },
  mounted () {
    console.log(this.$store.state.user)
    const d = new Date(this.user.createdAt)
    console.log(d)
    this.created = moment(d).format('MMMM YYYY')
  }
}
</script>

<style scoped>

</style>
