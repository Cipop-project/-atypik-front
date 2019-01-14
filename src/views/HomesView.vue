<template>
  <div>
    <v-header/>
    <v-container fluid>
      <v-layout>
        dazd
        {{ $route.params.home_slug }}
      </v-layout>
    </v-container>
    <v-footer/>
  </div>
</template>

<script>
export default {
  name: 'HomesView'
}
</script>

<style scoped>

</style>
