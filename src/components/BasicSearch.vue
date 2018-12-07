<template>
    <form>
      <v-flex row>
        <v-text-field append-icon="mdi-place" id="from" type="text" label="Destination" solo/>
        <v-text-field  append-icon="mdi-alacalendar_todayrm"id="from" type="text" label="Date d'arrivé" solo/>
        <v-text-field id="to" type="text" placeholder="Date de depart" solo/>
        <v-text-field id="people" type="text" placeholder="Voyageurs" solo/>
      </v-flex>
      <v-layout justify-center>
        <v-btn
          to="/search">Search</v-btn>
      </v-layout>

    </form>
</template>

<script>
export default {
  name: 'BasicSearch'
}
</script>

<style scoped>

</style>
