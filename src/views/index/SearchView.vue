<template>
  <div>
    <h1>Search</h1>
    <br>
    <v-layout
      align-start
      justify-start
      row
      fill-height>
      <v-flex
        md2
        xs4>
        <v-card>
          <v-carousel>
            <v-carousel-item
              v-for="(image,i) in product.images"
              :key="i"
              :src="image.src"/>
          </v-carousel>
          <v-card-title primary-title>
            <h3>product.title</h3>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'SearchView',
  data () {
    return {
      product: { 'title': 'first product', 'images': [{ 'title': 'first img', 'src': '/static/img/home_img_1.jpg' }, { 'title': 'second img', 'src': '/static/img/home_img_2.jpg' }] }
    }
  }
}
</script>

<style scoped>

</style>
