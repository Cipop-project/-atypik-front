<template>
  <div>
    <v-toolbar elevation-15>
      <v-toolbar-items>
        <v-btn flat>Option One</v-btn>
        <v-btn flat>Option Two</v-btn>
        <v-btn flat>Option Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-carousel
      delimiter-icon="mdi-stop"
      prev-icon="mdi-chevron-left"
      next-icon="mdi-chevron-right">
      <v-carousel-item
        v-for="(image,i) in images"
        :key="i"
        :src="image.src"/>
    </v-carousel>
    <BasicSearch/>
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
      ]
    }
  }
}
</script>

<style scoped>

</style>
