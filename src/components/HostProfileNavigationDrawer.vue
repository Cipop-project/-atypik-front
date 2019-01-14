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
      <v-list-group
        prepend-icon="mdi-home"
        append-icon="mdi-chevron-down">
        <v-list-tile slot="activator">
          <v-list-tile-title>Logements</v-list-tile-title>
        </v-list-tile>
        <router-link :to="{ name: 'addHomes' }">
          <v-list-tile @click="">
            <v-list-tile-title class="pl-3">Ajouter un logement</v-list-tile-title>
          </v-list-tile>
        </router-link>
        <router-link :to="{ name: 'editHomes' }">
          <v-list-tile @click="">
            <v-list-tile-title class="pl-3">Gerer mes logements</v-list-tile-title>
          </v-list-tile>
        </router-link>
      </v-list-group>
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
  name: 'HostProfileNavigationDrawer'
}
</script>

<style scoped>

</style>
