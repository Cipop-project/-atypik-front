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
          <v-layout wrap>
            <v-flex
              sm9
              class="pr-1">
              <h1>{{ product.name }}</h1>
              <v-product-description :product="product"/>
              <div id="product-description">
                <h3>Description</h3>
                {{ product.description }}
              </div>
              <h3>Prises de vue des utilisateurs</h3>
              <v-photo-gallery :items="product.usersImages"/>
              <h3>Commentaires</h3>
              <v-product-comments :product="product.id"/>
              <h3>Position</h3>
              <!--<v-google-maps/>-->
            </v-flex>
            <v-flex
              sm3
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
                :days="days"
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
import ProductDescription from '../../components/ProductDescription.vue'
import ProductComments from '../../components/ProductComments.vue'
import Resource from '../../resources/index'
export default {
  name: 'HomesView',
  components: {
    'v-product-description': ProductDescription,
    'v-product-comments': ProductComments
  },
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
    days () {
      return this.differenceInDays(this.getUTCDate(this.reservation.time[1]), this.getUTCDate(this.reservation.time[0]))
    },
    descriptifs () {
      return this.$store.state.descriptifs
    }
  },
  async mounted () {
    const { data } = await Resource.readProduct(this.$route.params.home_slug)
    this.product = data.data
    this.reservation.price = this.product.amount
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
  #product-description {
    min-height: 150px;
  }
</style>
