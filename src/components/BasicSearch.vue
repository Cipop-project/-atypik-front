<template>
  <div>
    <form>
      <label for="destination">Destination</label>
      <input
        id="destination"
        type="text">
      <v-btn
        to="/search">Search</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: 'BasicSearch'
}
</script>

<style scoped>

</style>
