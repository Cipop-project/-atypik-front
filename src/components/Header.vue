<template>
  <div class="header">
    <v-toolbar
      flat
      class="transparent">
      <router-link
        :style="{ cursor: 'pointer' }"
        tag="v-toolbar-title"
        to="/">
        <h1 class="font-weight-medium brown--text">AtypikHouse</h1>
      </router-link>
      <v-spacer/>
      <v-btn
        v-if="!isLoggedIn"
        to="/login"
        color="success">Login</v-btn>
      <v-btn
        v-else
        color="error">Logout</v-btn>
      <v-btn icon>
        <span class="flag-icon flag-icon-fr"/>
      </v-btn>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      isLoggedIn: this.$store.state.loggedIn
    }
  }
}
</script>

<style scoped>
</style>
