<template>
  <div class="header">
    <v-toolbar
      absolute
      flat
      class="transparent">
      <router-link
        :style="{ cursor: 'pointer' }"
        tag="v-toolbar-title"
        to="/">
        <h1 class="font-weight-medium white--text">AtypikHouse</h1>
      </router-link>
      <v-spacer/>
      <v-btn
        v-if="LoginVisible"
        to="/login"
        color="success">Login</v-btn>
      <v-btn
        v-if="LogoutVisible"
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
      LoginVisible: true,
      LogoutVisible: false
    }
  }
}
</script>

<style scoped>
</style>
