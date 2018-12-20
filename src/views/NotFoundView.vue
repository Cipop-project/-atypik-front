<template>
  <div>
    <v-header/>
    <v-container>
      <v-layout>
        <h1>Not Found 404</h1>
      </v-layout>
    </v-container>
    <v-footer/>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>

<style scoped>
  a {
    color: darkgrey;
  }
  a, a:hover {
    text-decoration: none;
  }
</style>
