<!--suppress ALL -->
<template>
  <v-container>
    <form action="">
      <v-layout
        fluid
        align-center
        justify-center>
        <v-flex xs4>
          <v-autocomplete
            hide-details
            v-model="model"
            :items="cities"
            item-text="city"
            item-value="city_id"
            placeholder="Destination"
            class="mr-2"
            append-icon="mdi-place"
            solo/>
        </v-flex>
        <!--<v-flex><v-text-field-->
        <!--id="from"-->
        <!--append-icon="mdi-place"-->
        <!--type="text"-->
        <!--class="mr-2"-->
        <!--label="Destination"-->
        <!--solo/></v-flex>-->
        <v-flex xs2>
          <v-text-field
          hide-details
          id="arrival_date"
          append-icon="mdi-calendar"
          type="date"
          class="mr-2"
          label="Date d'arrivé"
          solo/>
        </v-flex>
        <v-flex xs2>
          <v-text-field
          hide-details
          id="depart_date"
          append-icon="mdi-calendar"
          type="date"
          class="mr-2"
          placeholder="Date de depart"
          solo/>
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
          to="/search">Search</v-btn>
      </v-layout>
    </form>
  </v-container>
</template>

<script>
export default {
  name: 'BasicSearch',
  data () {
    return {
      model: null,
      adult_count: 0,
      children_count: 0,
      cities: [
        { 'city_id': 1, 'city': 'Paris', 'country': 'France' },
        { 'city_id': 2, 'city': 'Lille', 'country': 'France' },
        { 'city_id': 3, 'city': 'Marseille', 'country': 'France' }
      ]
    }
  },
  methods: {
    customDisplay (city, country) {
      return city + ' ' + country
    },
    decrementAdult () {
      this.adult_count = (this.adult_count-1 < 0 ? 0 : this.adult_count-1)
    },
    incrementAdult () {
      this.adult_count++
    },
    decrementChildren () {
      this.children_count = (this.children_count-1 < 0 ? 0 : this.children_count-1)
    },
    incrementChildren () {
      this.children_count++
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
