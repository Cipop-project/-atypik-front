<template>
  <div>
    <v-menu
      offset-y>
      <v-btn
        slot="activator"
        icon>
        <v-badge
          color="#ACB641"
          overlap>
          <span slot="badge">{{ user.messages.length }}</span>
          <v-icon :class="{ 'white--text': isHomepage }">mdi-email</v-icon>
        </v-badge>
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
      offset-y>
      <v-btn
        slot="activator"
        icon>
        <v-badge
          color="#ACB641"
          overlap>
          <span slot="badge">{{ user.notifications.length }}</span>
          <v-icon :class="{ 'white--text': isHomepage }">mdi-bell</v-icon>
        </v-badge>
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
      offset-y>
      <v-btn
        slot="activator"
        icon>
        <v-icon :class="{ 'white--text': isHomepage }">mdi-account</v-icon>
      </v-btn>
      <v-list class="pb-0 pt-0">
        <router-link :to="{ name: 'account' }">
          <v-list-tile @click="">
            <v-list-tile-title>Mon profil</v-list-tile-title>
          </v-list-tile>
        </router-link>
        <router-link :to="{ name: 'reservationCalendar' }">
          <v-list-tile @click="">
            <v-list-tile-title>Reservations</v-list-tile-title>
          </v-list-tile>
        </router-link>
        <hr class="ma-0">
        <v-list-tile
          class="red"
          @click="logout">
          <v-list-tile-title class="white--text"><v-icon class="white--text">mdi-power</v-icon>Deconnection</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: 'AccountNotificationsView',
  filters: {
    smallMessage (v) {
      if (v.length > 40) {
        return v.substring(0, 40) + '...'
      } else {
        return v
      }
    }
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    isHomepage: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    logout () {
      localStorage.removeItem('user')
      // this.$store.state.loggedIn = false
      location.reload()
      // this.$router.push({ name: 'homepage' })
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
