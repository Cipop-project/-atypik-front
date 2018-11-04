<template>
  <div class="header">
    <v-toolbar class="white">
      <v-toolbar-side-icon>
        <router-link
          tag="img"
          to="/"
          src="/static/img/icon.png"
          height="40"
          alt="logo"/>
      </v-toolbar-side-icon>
      <v-spacer/>
      <v-btn
        v-if="LoginVisible"
        to="/login"
        color="success">Login</v-btn>
      <v-btn
        v-if="LogoutVisible"
        color="error">Logout</v-btn>
      <v-btn icon>
        <v-icon>mdi-flag</v-icon>
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
