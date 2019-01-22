<template>
  <v-layout id="photo-box">

  </v-layout>
</template>

<script>
// import VueGallery from 'vue-gallery'
export default {
  name: 'PhotoGallery',
  data () {
    return {
      images: [
        'https://dummyimage.com/800/ffffff/000000',
        'https://dummyimage.com/1600/ffffff/000000',
        'https://dummyimage.com/1280/000000/ffffff',
        'https://dummyimage.com/400/000000/ffffff'
      ],
      index: null
    }
  }
}
</script>

<style scoped>
#photo-box {
  background-color: #000;
  height: 150px;
}
</style>
