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
export default {
  name: 'SearchView',
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
