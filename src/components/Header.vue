<template>
  <div class="header">
    <v-toolbar
      flat
      class="transparent">
      <router-link
        :style="{ cursor: 'pointer' }"
        :to="{ name: 'homepage' }"
        tag="v-toolbar-title">
        <h1 class="font-weight-medium brown--text">AtypikHouse</h1>
      </router-link>
      <v-spacer/>
      <v-btn
        v-if="!isLoggedIn"
        to="/login"
        color="success">Login</v-btn>
      <v-menu
        v-if="isLoggedIn"
        offset-y>
        <v-btn
          slot="activator"
          icon>
          <v-icon>mdi-email</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="(message, index) in user.messages"
            :key="index"
            @click="">
            <v-list-tile-content>
              <v-list-tile-title>{{ message.from }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ message.content | smallMessage }}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu
        v-if="isLoggedIn"
        offset-y>
        <v-btn
          slot="activator"
          icon>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="(notification, index) in user.notifications"
            :key="index"
            @click="">
            <v-list-tile-content>
              <v-list-tile-title>{{ notification.content | smallMessage }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-menu
        v-if="isLoggedIn"
        offset-y>
        <v-btn
          slot="activator"
          icon>
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-list>
          <router-link :to="{ name: 'account' }">
            <v-list-tile @click="">
              <v-list-tile-title>Mon profil</v-list-tile-title>
            </v-list-tile>
          </router-link>
          <v-list-tile @click="">
            <v-list-tile-title>Mes voyages</v-list-tile-title>
          </v-list-tile>
          <hr>
          <v-list-tile @click="">
            <v-list-tile-title><v-icon>mdi-power</v-icon>Deconnection</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-btn icon>
        <span class="flag-icon flag-icon-fr"/>
      </v-btn>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  name: 'Header',
  filters: {
    smallMessage (v) {
      if (v.length > 40) {
        return v.substring(0, 40) + '...'
      } else {
        return v
      }
    }
  },
  data () {
    return {
      isLoggedIn: this.$store.state.loggedIn,
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
  }
}
</script>

<style scoped>
</style>
