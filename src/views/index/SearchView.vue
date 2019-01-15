<template>
  <div>
    <v-header/>
    <v-container
      fluid
      class="custom-container">
      <div class="spacer"/>
      <v-basic-search/>
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
          <router-link :to="productUrl(product)">
            <v-small-card :item="product"/>
          </router-link>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer/>
  </div>
</template>

<script>
import Resource from '../../resources'
export default {
  name: 'SearchView',
  data () {
    return {
      products: []
    }
  },
  mounted () {
    this.refresh()
  },
  methods: {
    productUrl (product) {
      return '/homes/' + product.id
    },
    async refresh () {
      const product = this.$route.params.productDTO
      console.log(product)
      if (product) {
        product.endTime = new Date(product.endTime)
        product.endTime = product.endTime.toISOString()
        product.startTime = new Date(product.startTime)
        product.startTime = product.startTime.toISOString()
        const { data } = await Resource.search(product)
        this.products = data.data
      } else {
        const { data } = await Resource.findArray()
        this.products = data.data
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
