<template>
  <v-layout wrap>
    <v-loading :is-loading="loading"/>
    <v-flex
      v-for="(product, id) in userProducts"
      :key="id"
      md2
      xs4
      class="ma-3">
      <router-link :to="{ name: 'editHome', params: { home_slug: product.id } }">
        <v-small-card :item="product"/>
      </router-link>
    </v-flex>
  </v-layout>
</template>

<script>
import Resource from '../../resources'
export default {
  name: 'AccountEditHomesView',
  data () {
    return {
      user: this.$store.state.user,
      userProducts: [],
      loading: false
    }
  },
  async mounted () {
    this.loading = true
    console.log(this.user)
    const { data } = await Resource.readUserProducts(this.user.id)
    if (typeof data.data === 'Object') {
      this.userProducts.push(data.data)
    } else {
      this.userProducts = data.data
    }
    this.loading = false
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
