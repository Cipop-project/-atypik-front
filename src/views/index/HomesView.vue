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
              <hr>
              <v-product-description :product="product"/>
              <hr>
              <div id="product-description">
                <h3>Description</h3>
                {{ product.description }}
              </div>
              <hr>
              <h3>Prises de vue des utilisateurs</h3>
              <v-photo-gallery :items="product.usersImages"/>
              <hr>
              <h3>Commentaires</h3>
              <v-product-comments :product="product.id"/>
              <hr>
              <h3>Position</h3>
              <v-google-maps/>
            </v-flex>
            <v-flex
              sm3
              class="pl-2">
              <el-date-range-picker
                :reservation="reservation.time"
                class="mb-4"
                @custtom="updateFrom($event)"/>
              <v-menu
                :close-on-content-click="false"
                v-model="menu_from"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width>
                <v-text-field
                  slot="activator"
                  v-model="reservation.time[0]"
                  label="Date de depart"
                  box
                  background-color="'#defabb'"
                  class="elevation-4 mb-3"
                  readonly
                  hide-details/>
                <v-date-picker
                  v-model="reservation.time[0]"
                  :min="minFromDate"
                  color="green"
                  no-title
                  next-icon="mdi-chevron-right"
                  prev-icon="mdi-chevron-left"
                  show-current
                  @change="menu_from = false"/>
              </v-menu>
              <v-menu
                :close-on-content-click="false"
                v-model="menu_to"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width>
                <v-text-field
                  slot="activator"
                  v-model="reservation.time[1]"
                  label="Date d'arrivée"
                  box
                  readonly
                  background-color="'#defabb'"
                  class="elevation-4 mb-3"
                  hide-details/>
                <v-date-picker
                  v-model="reservation.time[1]"
                  :min="minToDate"
                  color="green"
                  no-title
                  next-icon="mdi-chevron-right"
                  prev-icon="mdi-chevron-left"
                  show-current
                  @change="menu_to = false"/>
              </v-menu>
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
      menu_from: false,
      menu_to: false,
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
    minFromDate () {
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate())
      return this.formatDate(tomorrow)
    },
    minToDate () {
      if (this.reservation.time[0] == null) {
        const tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + 1)
        return this.formatDate(tomorrow)
      } else {
        const nextDay = new Date(this.reservation.time[0])
        console.log(nextDay)
        nextDay.setDate(nextDay.getDate() + 1)
        return this.formatDate(nextDay)
      }
    },
    days () {
      return this.differenceInDays(this.getUTCDate(this.reservation.time[1]), this.getUTCDate(this.reservation.time[0]))
    },
    descriptifs () {
      return this.$store.state.descriptifs
    }
  },
  beforeMount () {
    if (localStorage.searchData) {
      console.log(JSON.parse(localStorage.searchData))
      this.reservation.time[0] = JSON.parse(localStorage.searchData).startTime
      this.reservation.time[1] = JSON.parse(localStorage.searchData).endTime
      this.reservation.people = JSON.parse(localStorage.searchData).peopleNumber
    }
  },
  async mounted () {
    const { data } = await Resource.readProduct(this.$route.params.home_slug)
    this.product = data.data
    this.reservation.price = this.product.amount
    console.log(this.product)
  },
  methods: {
    formatDate (date) {
      let month = `${date.getMonth() + 1}`
      let day = `${date.getDate()}`
      const year = date.getFullYear()

      if (month.length < 2) month = `0${month}`
      if (day.length < 2) day = `0${day}`

      return [year, month, day].join('-')
    },
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
