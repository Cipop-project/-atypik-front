<template>
  <div>
    <v-header/>
    <v-container
      fluid
      class="custom-container">
      <v-layout
        justify-center
        xs10
        off
        wrap>
        <v-flex
          xs12
          md8>
          <v-basic-search @refresh-data="refresh"/>
          <v-loading :is-loading="productLoading"/>
        </v-flex>
      </v-layout>
      <v-layout
        justify-center
        xs10
        off
        wrap>
        <v-flex xs10>
          <v-layout>
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
      products: [],
      productLoading: false
    }
  },
  mounted () {
    this.refresh()
  },
  methods: {
    productUrl (product) {
      return '/homes/' + product.id
    },
    async refresh (passedData) {
      const postProduct = passedData === undefined ? this.$route.params.productDTO : passedData
      if (postProduct) {
        postProduct.endTime = new Date(postProduct.endTime).toISOString()
        postProduct.startTime = new Date(postProduct.startTime).toISOString()
        const { data } = await Resource.search(postProduct)
        this.products = data.data
      } else {
        console.log('no params')
        // const { data } = await Resource.findArray()
        // this.products = data.data
      }
    }
  }
}
</script>

<style scoped>
  .products-box {
    min-height: 50px;
  }
  .card-img {
    height: 200px;
  }
  .spacer {
    margin-top: 64px;
  }
</style>
