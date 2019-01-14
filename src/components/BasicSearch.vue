<!--suppress ALL -->
<template>
  <v-container>
    <form action="">
      <v-layout
        fluid
        align-center
        justify-center>
        <v-flex xs4>
          <!--<el-atypik-select type="cities" filterable v-model="product.city"/>-->
          <v-autocomplete
            hide-details
            v-model="product.city"
            :items="cities"
            item-text="city"
            item-value="city_id"
            placeholder="Destination"
            class="mr-2"
            append-icon="mdi-place"
            solo/>
        </v-flex>
        <v-flex xs2>
          <v-menu
            lazy
            :close-on-content-click="false"
            v-model="menu_from"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40">
            <v-text-field
              hide-details
              id="depart_date"
              append-icon="mdi-calendar"
              slot="activator"
              v-model="product.startTime"
              class="mr-2"
              label="Date de départ"
              solo/>
            <v-date-picker
              @change="menu_from = false"
              v-model="product.startTime"
              :min="minFromDate"
              color="green"
              no-title
              next-icon="mdi-chevron-right"
              prev-icon="mdi-chevron-left"
              show-current>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs2>
          <v-menu
            lazy
            :close-on-content-click="false"
            v-model="menu_to"
            transition="scale-transition"
            offset-y
            full-width
            :nudge-right="40">
            <v-text-field
              hide-details
              id="arrival_date"
              label="Date d'arrivé"
              append-icon="mdi-calendar"
              slot="activator"
              v-model="product.endTime"
              class="mr-2"
              solo/>
            <v-date-picker
              @change="menu_to = false"
              v-model="product.endTime"
              :min="minToDate"
              color="green"
              no-title
              next-icon="mdi-chevron-right"
              prev-icon="mdi-chevron-left"
              show-current>
            </v-date-picker>
          </v-menu>
        </v-flex>
        <v-flex xs1>
          <v-menu offset-y :close-on-content-click="false">
            <v-text-field
              hide-details
              id="people"
              append-icon="mdi-account"
              slot="activator"
              type="text"
              placeholder="Voyageurs"
              :value="adult_count+children_count == 0 ? '' : adult_count+children_count"
              v-model="product.peopleNumber"
              readonly
              solo/>
            <v-container fluid text-xs-center class="white">
              <h4>Adults</h4>
              <v-layout wrap>
                <v-flex xs4 text-xs-right>
                  <v-btn fab flat small @click="decrementAdult">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs4>
                  <v-text-field
                  hide-details
                  type="number"
                  id="adult_count"
                  solo
                  min="0"
                  v-model="adult_count"
                  :value="adult_count">
                  </v-text-field>
                </v-flex>
                <v-flex xs4 text-xs-left>
                  <v-btn fab flat small @click="incrementAdult">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
              <hr>
              <h4>Children</h4>
              <v-layout wrap>
                <v-flex xs4 text-xs-right>
                  <v-btn fab flat small @click="decrementChildren">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                </v-flex>
                <v-flex xs4>
                  <v-text-field
                    hide-details
                    type="number"
                    solo
                    min="0"
                    v-model="children_count"
                    :value="children_count">
                  </v-text-field>
                </v-flex>
                <v-flex xs4 text-xs-left>
                  <v-btn fab flat small @click="incrementChildren">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-menu>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-btn
          class="search-button"
          color="success"
          :to="{ name: 'search', params: { productDTO: product } }">Search</v-btn>
      </v-layout>
    </form>
  </v-container>
</template>

<script>
import Resource from '../resources'
export default {
  name: 'BasicSearch',
  data () {
    return {
      model: null,
      menu_from: false,
      menu_to: false,
      product: {
        startTime: '',
        endTime: '',
        city: '',
        peopleNumber: 1
      },
      adult_count: 1,
      children_count: 0,
      // cities: [
      //   { 'city_id': 1, 'city': 'Paris', 'country': 'France' },
      //   { 'city_id': 2, 'city': 'Lille', 'country': 'France' },
      //   { 'city_id': 3, 'city': 'Marseille', 'country': 'France' }
      // ]
      // cities: this.$store.state.cities
      cities: []
    }
  },
  async mounted () {
    // this.cities = [
    //   { 'city_id': 1, 'city': 'Paris', 'country': 'France' },
    //   { 'city_id': 2, 'city': 'Lille', 'country': 'France' },
    //   { 'city_id': 3, 'city': 'Marseille', 'country': 'France' }
    // ],
    this.cities = await this.fetchOptions()
  },
  // mounted () {
  //   const product = this.$route.params.productDTO
  //   if (product) {
  //     this.product = product
  //   }
  // },
  methods: {
    async fetchOptions () {
      console.log('fetch0')
      const { data: cities } = await Resource.findCities()
      return cities
    },
    customDisplay (city, country) {
      return city + ' ' + country
    },
    formatDate(date) {
      let month = `${date.getMonth() + 1}`
      let day = `${date.getDate()}`
      const year = date.getFullYear()

      if (month.length < 2) month = `0${month}`
      if (day.length < 2) day = `0${day}`

      return [year, month, day].join('-')
    },
    decrementAdult () {
      this.adult_count = (this.adult_count-1 < 0 ? 0 : this.adult_count-1)
      this.product.peopleNumber = this.adult_count + this.children_count
    },
    incrementAdult () {
      this.adult_count++
      this.product.peopleNumber = this.adult_count + this.children_count
    },
    decrementChildren () {
      this.children_count = (this.children_count-1 < 0 ? 0 : this.children_count-1)
      this.product.peopleNumber = this.adult_count + this.children_count
    },
    incrementChildren () {
      this.children_count++
      this.product.peopleNumber = this.adult_count + this.children_count
    }
  },
  computed: {
    minFromDate () {
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate())
      return this.formatDate(tomorrow)
    },
    minToDate () {
       if (this.date_from == null) {
         const tomorrow = new Date()
         tomorrow.setDate(tomorrow.getDate()+1)
         return this.formatDate(tomorrow)
       } else {
         const nextDay = new Date(this.date_from)
         console.log(nextDay)
         nextDay.setDate(nextDay.getDate()+1)
         return this.formatDate(nextDay)
         return this.date_from
       }
    }
  }
}
</script>

<style scoped>
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.search-button {
  width: 50%;
  background-color: forestgreen;
  opacity: 0.8;
}
.search-button:hover {
  opacity: 1;
  text-decoration: none;
}
</style>
