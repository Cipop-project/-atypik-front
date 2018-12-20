<template>
  <div>
    <v-homepage-header/>
    <v-img
      alt="logement inedit sur la cote d'un lac"
      src="/static/img/home.jpg"
      max-height="800"
      gradient="to top, rgba(100,115,201,.0), rgba(0,0,0,.4)">
      <v-layout
        justify-center
        align-center
        fill-height>
        <BasicSearch/>
      </v-layout>
    </v-img>
    <!--<v-layout>-->
    <!--<v-flex-->
    <!--v-for="(city, i) in cityDestinations"-->
    <!--:key="i"-->
    <!--md3-->
    <!--justify-space-between>-->
    <!--<v-card>-->
    <!--<v-img :src="city.src" />-->
    <!--</v-card>-->
    <!--</v-flex>-->
    <!--</v-layout>-->
    <v-footer/>
  </div>
</template>

<script>
import BasicSearch from '../components/BasicSearch.vue'
export default {
  name: 'HomepageVue',
  components: {
    BasicSearch
  },
  data () {
    return {
      images: [
        {
          src: '/static/img/home_img_1.jpg'
        },
        {
          src: '/static/img/home_img_2.jpg'
        }
      ],
      cityDestinations: [
        {
          name: 'Grenoble',
          text: 'A partir de 49€ la nuit',
          src: 'https://picsum.photos/200/300/?image=170'
        },
        {
          name: 'Lyon',
          text: 'A partir de 42€ la nuit',
          src: 'https://picsum.photos/200/300/?image=350'
        }
      ]
    }
  }
}
</script>

<style>
  .header {
    margin-bottom: 0px;
  }
</style>
