<template>
  <v-container fluid>
    <div class="spacer"/>
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
          <v-carousel
            interval="8000"
            class="card-img"
            delimiter-icon="mdi-cisco-webex"
            next-icon="mdi-chevron-right"
            prev-icon="mdi-chevron-left">
            <v-carousel-item
              v-for="(image,i) in product.images"
              :key="i"
              :src="image.src"/>
          </v-carousel>
          <v-card-title primary-title>
            <h3>{{ product.title }}</h3>
          </v-card-title>
          <v-card-text>
            {{ product.description }}
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'SearchView',
  data () {
    return {
      product: {
        'title': 'first product',
        'images': [
          { 'title': 'first img', 'src': '/static/img/home_img_1.jpg' },
          { 'title': 'second img', 'src': '/static/img/home_img_2.jpg' }
        ],
        'description': 'Here goes the description of first product'
      }
    }
  }
}
</script>

<style scoped>
  .card-img {
    height: 200px;
  }
  .spacer {
    margin-top: 64px;
  }
</style>
