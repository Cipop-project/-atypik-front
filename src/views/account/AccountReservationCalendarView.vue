<template>
  <v-container fluid>
    <v-expansion-panel
      v-model="selectionMenu">
      <v-expansion-panel-content expand-icon="mdi-chevron-down">
        <div slot="header">Selectionner un logement</div>
        <v-layout>
          <v-flex
            v-for="(product, id) in user.homes"
            :key="id"
            md2
            xs4
            class="ma-3 cursor"
            @click="changeProduct(product.product_id)">
            <v-small-card
              :item="product"/>
          </v-flex>
        </v-layout>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <hr>
    <div v-if="selectionMenu">
      <h3>{{ productId }}</h3>
    </div>
    <v-reservation-calendar v-if="selectionMenu"/>
  </v-container>
</template>

<script>
export default {
  name: 'AccountReservationCalendarView',
  data () {
    return {
      user: this.$store.state.user,
      productId: '',
      selectionMenu: null
    }
  },
  methods: {
    changeProduct (id) {
      this.productId = id
      this.selectionMenu = 1
    }
  }
}
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
</style>
