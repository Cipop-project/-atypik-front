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
    <v-layout v-if="selectionMenu">
      <v-expansion-panel>
        <v-expansion-panel-content
          v-for="(reservation, i) in reservations"
          :key="i"
          expand-icon="mdi-chevron-down">
          <div slot="header">{{ reservation.start }} || {{ reservation.end }}</div>
          <v-layout>
            <v-flex ma-3>
              Date de debut: {{ reservation.start }}
              <br>
              Date de depart: {{ reservation.end }}
              <br>
              Status:{{ reservation.status }}
              <br>
              Vous avez gagné: {{ reservation.amount }} €
            </v-flex>
          </v-layout>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'AccountReservationDetailsView',
  data () {
    return {
      user: this.$store.state.user,
      productId: '',
      selectionMenu: null,
      reservations: [
        {
          start: '2019-01-17',
          end: '2019-01-19',
          status: 'payé et séjourné',
          amount: '128'
        }
      ]
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
