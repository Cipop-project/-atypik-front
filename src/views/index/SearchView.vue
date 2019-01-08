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
          <v-small-card :item="product"/>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer/>
  </div>
</template>

<script>
// import Resource from '../../resources'
export default {
  name: 'SearchView',
  // data () {
  //   return {
  //     products: []
  //   }
  // },
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  mounted () {
    this.refresh()
  },
  methods: {
    refresh () {
      const product = this.$route.params.productDTO
      console.log(product)
      // if (product) {
      //   const { data } = await Resource.search(product)
      //   this.productsList = data.data
      // } else {
      //   const { data } = await Resource.findArray()
      //   this.productsList = data.data
      // }
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
