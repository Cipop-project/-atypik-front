<template>
  <v-layout>
    <v-flex
      v-for="(product, id) in user.homes"
      :key="id"
      md2
      xs4
      class="ma-3">
      <router-link :to="{ name: 'editHome', params: { home_slug: product.product_id } }">
        <v-small-card :item="product"/>
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'AccountEditHomesView',
  data () {
    return {
      user: this.$store.state.user
    }
  },
  methods: {
    formatMoney (e) {
      if (!isNaN(e.key)) {
        console.log(e.key)
      }
    }
  }
}
</script>

<style scoped>

</style>
