<template>
  <form>
    <v-container >
      <v-layout>
        <v-flex><v-text-field
          id="from"
          append-icon="mdi-place"
          type="text"
          class="mr-2"
          label="Destination"
          solo/></v-flex>
        <v-flex><v-text-field
          id="arrival_date"
          append-icon="mdi-calendar"
          type="text"
          class="mr-2"
          label="Date d'arrivé"
          solo/></v-flex>
        <v-flex><v-text-field
          id="depart_date"
          append-icon="mdi-calendar"
          type="text"
          class="mr-2"
          placeholder="Date de depart"
          solo/></v-flex>
        <v-flex><v-text-field
          id="people"
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
    </v-container>
  </form>
</template>

<script>
export default {
  name: 'BasicSearch',
  data () {
    return {
      cities: [
        'abc',
        'bcd',
        'cde',
        'def'
      ]
    }
  }
}
</script>

<style scoped>
.search-button {
  width: 75%;
  background-color: forestgreen;
  opacity: 0.8;
}
.search-button:hover {
  opacity: 1;
  text-decoration: none;
}
</style>
