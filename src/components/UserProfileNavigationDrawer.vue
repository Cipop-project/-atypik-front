<template>
  <v-navigation-drawer>
    <v-list>
      <router-link to="/account">
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>mdi-account</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Profil</v-list-tile-title>
        </v-list-tile>
      </router-link>
      <router-link to="/account/edit">
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>mdi-account-edit</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Modifier le profil</v-list-tile-title>
        </v-list-tile>
      </router-link>
      <router-link to="/account/trips">
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>mdi-airplane</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Mes voyages</v-list-tile-title>
        </v-list-tile>
      </router-link>
      <router-link to="/account/starred">
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>mdi-star</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Mes favorits</v-list-tile-title>
        </v-list-tile>
      </router-link>
      <router-link to="/account/host">
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>mdi-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Devenir hôte</v-list-tile-title>
        </v-list-tile>
      </router-link>
      <router-link to="/account/settings">
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

</style>
