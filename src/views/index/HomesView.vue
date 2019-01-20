<template>
  <div>
    <v-header/>
    <v-container fluid>
      <v-layout justify-center>
        <v-flex sm10>
          <el-atypik-carousel
            :items="product.images"
            :customkey="'id'"
            :src="'addressUrl'"
            class="mb-5"/>
          <v-layout>
            <v-flex
              xs9
              class="pr-1">
              <h1>{{ product.name }}</h1>
              <v-layout class="description-box pa-4 mt-2 mb-4">
                <v-flex
                  v-for="(item, i) in descriptifs"
                  :key="i"
                  sm-3
                  class="description-item pl-1">
                  {{ item }} : {{ product[item] }}
                </v-flex>
              </v-layout>
              {{ product.description }}
              <h2>Prises de vue des utilisateurs</h2>
              <v-photo-gallery/>
              <h2>Commentaires</h2>
              <!--<v-product-map :address="product.address"/>-->
            </v-flex>
            <v-flex
              xs3
              class="pl-2">
              <el-date-range-picker
                :reservation="reservation.time"
                class="mb-4"
                @custtom="updateFrom($event)"/>
              <v-text-field
                v-model="reservation.time[0]"
                label="Date de depart"
                box
                background-color="'#defabb'"
                class="elevation-4 mb-3"
                hide-details/>
              <v-text-field
                v-model="reservation.time[1]"
                label="Date d'arrivée"
                box
                background-color="'#defabb'"
                class="elevation-4 mb-3"
                hide-details/>
              <v-text-field
                v-model="reservation.people"
                type="number"
                label="Voyageurs"
                class="elevation-4 mb-4"
                box
                hide-details/>
              <el-price-details
                :price="reservation.price"
                :discounts="reservation.discounts"/>
              <v-layout justify-center>
                <v-btn
                  :to="{ name: 'reservation' }"
                  block
                  color="success"
                  @click="saveReservation">Reserver</v-btn>
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
import Resource from '../../resources/index'
export default {
  name: 'HomesView',
  data () {
    return {
      product: {
        address: '',
        amount: 0,
        city: '',
        clientId: '',
        country: '',
        createdAt: null,
        createdBy: null,
        description: '',
        id: '',
        images: [],
        name: '',
        peopleNumber: 1,
        updatedAt: null,
        updatedBy: null,
        zipCode: ''
      },
      reservation: {
        time: [this.dateFormat(new Date()), this.dateFormat(this.addDays(new Date(), 1))],
        people: 1,
        price: 0,
        discounts: [
          {
            name: '7 nuits',
            price: 0
          },
          {
            name: 'Code promo',
            price: 0
          }
        ]
      }
    }
  },
  computed: {
    descriptifs () {
      return this.$store.state.descriptifs
    }
  },
  async mounted () {
    const { data } = await Resource.searchProduct(this.$route.params.home_slug)
    this.product = data.data
    console.log(this.product)
  },
  methods: {
    saveReservation () {
      localStorage.reservation = JSON.stringify({
        product_name: this.product.name,
        product_id: this.product.id,
        start_date: this.reservation.time[0],
        end_date: this.reservation.time[1],
        people: this.reservation.people
      })
    },
    updateFrom (newValue) {
      console.log(newValue)
      this.reservation[0] = newValue
    },
    updateTo (newValue) {
      this.reservation[1] = newValue
    }
  }
}
</script>

<style scoped>
.description-box {
  background-color: #ebffee;
}
.description-item {
  font-size: 1.3em;
  border-left: 5px solid forestgreen;
}
</style>
