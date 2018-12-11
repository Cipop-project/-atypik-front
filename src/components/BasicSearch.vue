<template>
  <v-container>
    <form action="">
      <v-layout
        fluid
        align-center
        justify-center>
        <v-flex xs4>
          <v-autocomplete
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
        <v-flex xs2><v-text-field
          id="arrival_date"
          append-icon="mdi-calendar"
          type="text"
          class="mr-2"
          label="Date d'arrivé"
          solo/></v-flex>
        <v-flex xs2><v-text-field
          id="depart_date"
          append-icon="mdi-calendar"
          type="text"
          class="mr-2"
          placeholder="Date de depart"
          solo/></v-flex>
        <v-flex xs1><v-text-field
          id="people"
          append-icon="mdi-account"
          type="text"
          placeholder="Voyageurs"
          solo/></v-flex>
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
    }
  }
}
</script>

<style scoped>
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
