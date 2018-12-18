<template>
  <v-container
    fluid
    class="custom-container">
    <div class="spacer"/>
    <BasicSearch/>
    <br>
    <v-layout
      align-start
      justify-start
      row
      fill-height>
      <v-flex
        v-for="(product, id) in products"
        :key="id"
        md2
        xs4
        class="ma-3">
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
          <router-link :to="{ name: 'product-details', params: { id: product.id } }">
            <v-card-title primary-title>
              <h3>{{ product.title }}</h3>
            </v-card-title>
            <v-card-text>
              {{ product.description }}
            </v-card-text>
          </router-link>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BasicSearch from '../../components/BasicSearch.vue'
export default {
  name: 'SearchView',
  components: { BasicSearch },
  data () {
    return {
      products: [
        {
          'id': 1,
          'title': 'first product',
          'images': [
            { 'title': 'first img', 'src': '/static/img/home_img_1.jpg' },
            { 'title': 'second img', 'src': '/static/img/home_img_2.jpg' }
          ],
          'description': 'Here goes the description of first product'
        },
        {
          'id': 2,
          'title': 'second product',
          'images': [
            { 'title': 'first img', 'src': '/static/img/home_img_1.jpg' },
            { 'title': 'second img', 'src': '/static/img/home_img_2.jpg' }
          ],
          'description': 'Here goes the description of second product'
        }
      ]
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
