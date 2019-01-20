<template>
  <v-navigation-drawer>
    <v-list>
      <router-link :to="{ name: 'account' }">
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>mdi-account</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Profil</v-list-tile-title>
        </v-list-tile>
      </router-link>
      <router-link :to="{ name: 'editAccount' }">
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>mdi-account-edit</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Modifier le profil</v-list-tile-title>
        </v-list-tile>
      </router-link>
      <router-link :to="{ name: 'messages' }">
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>mdi-email-open</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Messages</v-list-tile-title>
        </v-list-tile>
      </router-link>
      <router-link :to="{ name: 'tripsAccount' }">
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>mdi-airplane</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Mes voyages</v-list-tile-title>
        </v-list-tile>
      </router-link>
      <router-link :to="{ name: 'starredAccount' }">
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>mdi-star</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Mes favorits</v-list-tile-title>
        </v-list-tile>
      </router-link>
      <router-link :to="{ name: 'hostAccount' }">
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>mdi-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Devenir hôte</v-list-tile-title>
        </v-list-tile>
      </router-link>
      <router-link :to="{ name: 'configAccount' }">
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Paramètres du compte</v-list-tile-title>
        </v-list-tile>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'UserProfileNavigationDrawer'
}
</script>

<style scoped>
  a {
    color: black;
    text-decoration: none;
  }
</style>
