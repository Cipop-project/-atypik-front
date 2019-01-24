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
        </v-flex>
      </v-layout>
      <v-layout
        justify-center
        xs10
        off
        wrap>
        <v-flex
          xs12
          md10
          class="vld-parent products-box">
          <v-loading :is-loading="productLoading"/>
          <v-layout wrap>
            <v-flex md2>
              <v-search-filter
                :data="products"
                @filter="filterData"/>
            </v-flex>
            <v-flex
              v-for="(product, id) in visible"
              :key="id"
              md2
              xs4
              class="ma-3">
              <router-link :to="{ name: 'homeDetails', params: { home_slug: product.id } }">
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
      visible: [],
      productLoading: false
    }
  },
  mounted () {
    this.refresh()
  },
  methods: {
    filterData (data) {
      this.visible = data
    },
    async refresh (passedData) {
      this.products = []
      this.visible = []
      const postProduct = passedData === undefined ? this.$route.params.productDTO : passedData
      if (postProduct) {
        this.productLoading = true
        postProduct.endTime = new Date(postProduct.endTime).toISOString()
        postProduct.startTime = new Date(postProduct.startTime).toISOString()
        const { data } = await Resource.search(postProduct)
        this.productLoading = false
        this.products = data.data
        this.visible = data.data
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
  a {
    color: black;
    text-decoration: none;
  }
  .products-box {
    min-height: 200px;
  }
  .card-img {
    height: 200px;
  }
  .spacer {
    margin-top: 64px;
  }
</style>
