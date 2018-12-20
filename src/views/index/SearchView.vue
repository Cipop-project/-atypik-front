<template>
  <div>
    <v-header/>
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
    <v-footer/>
  </div>
</template>

<script>
import BasicSearch from '../../components/BasicSearch.vue'
export default {
  name: 'SearchView',
  components: { BasicSearch },
  computed: {
    products () {
      return this.$store.state.products
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
