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
      <v-btn
        v-if="!loggedIn"
        to="/login"
        color="success">Login</v-btn>
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
      user: {
        messages: [
          {
            from: 'Charlie',
            content: 'bla bla lorem ipsum',
            date: '03 mar 2018'
          },
          {
            from: 'Charline',
            content: 'bla bla lorem ipsum bla bla lorem ipsumbla bla lorem ipsumbla bla lorem ipsumbla bla lorem ipsumbla bla lorem ipsumbla bla lorem ipsum',
            date: '03 sep 2018'
          }
        ],
        notifications: [
          {
            content: 'bla bla lorem ipsumbla bla lorem ipsumbla bla lorem ipsumbla ',
            date: '05 nov 2018'
          }
        ]
      }
    }
  },
  mounted () {
    console.log(this.$router.currentRoute.path)
  }
}
</script>

<style scoped>
</style>
