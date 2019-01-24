<template>
  <div class="header">
    <v-toolbar
      :absolute="isHomepage"
      flat
      class="transparent">
      <router-link
        :style="{ cursor: 'pointer' }"
        :to="{ name: 'homepage' }"
        tag="v-toolbar-title">
        <h1
          :class="{ 'white--text': isHomepage, 'brown--text': !isHomepage }"
          class="font-weight-medium">AtypikHouse</h1>
      </router-link>
      <v-spacer/>
      <!--<v-btn-->
        <!--v-if="!loggedIn"-->
        <!--:to="{ name: 'signin' }"-->
        <!--color="info">Creer compte</v-btn>-->
      <v-btn
        v-if="!loggedIn"
        :to="{ name: 'login' }"
        color="success">Connection</v-btn>
      <v-account-notifications
        v-else
        :is-homepage="isHomepage"
        :user="user"/>
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
      loggedIn: this.$store.state.loggedIn,
      isHomepage: this.$router.currentRoute.path === '/',
      user: this.$store.state.user
    }
  }
}
</script>

<style scoped>
  a {
    color: black;
    text-decoration: none;
  }
</style>
