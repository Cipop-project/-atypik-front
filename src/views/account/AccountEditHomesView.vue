<template>
  <div>
    <v-header/>
    <v-container fluid>
      <v-layout justify-center>
        <v-flex xs10>
          <v-layout>
            <v-flex md2>
              <v-layout v-if="user.type=='host'">
                <v-host-profile-navigation/>
              </v-layout>
              <v-layout v-else>
                <v-user-profile-navigation/>
              </v-layout>
            </v-flex>
            <v-flex
              md10
              class="pa-4 pl-5">
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
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer/>
  </div>
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
