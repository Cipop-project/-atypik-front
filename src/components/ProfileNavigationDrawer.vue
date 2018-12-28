<template>
  <v-navigation-drawer>
    <v-list>
      <router-link to="/account">
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>mdi-home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>
      </router-link>
      <v-list-group
        prepend-icon="mdi-account"
        append-icon="mdi-chevron-down"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Profile</v-list-tile-title>
        </v-list-tile>
        <v-list-group
          no-action
          sub-group
          value="true"
          prepend-icon="mdi-chevron-down"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-title>One</v-list-title>
          </v-list-tile>
          <v-list-tile>
            <v-list-title>One</v-list-title>
          </v-list-tile>
        </v-list-group>
        <v-list-group
          no-action
          sub-group
          prepend-icon="mdi-chevron-down"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Admin</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(admin, i) in admins"
            :key="i"
            @click=""
          >
            <v-list-tile-title v-text="admin[0]"/>
            <v-list-tile-action>
              <v-icon v-text="admin[1]"/>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group
          sub-group
          no-action
          prepend-icon="mdi-chevron-down"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Actions</v-list-tile-title>
          </v-list-tile>

          <v-list-tile
            v-for="(crud, i) in cruds"
            :key="i"
            @click=""
          >
            <v-list-tile-title v-text="crud[0]"/>
            <v-list-tile-action>
              <v-icon v-text="crud[1]"/>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
    export default {
        name: "ProfileNavigationDrawer"
    }
</script>

<style scoped>

</style>
