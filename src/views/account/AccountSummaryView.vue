<template>
  <div>
    <v-header/>
    <v-container fluid>
      <v-layout justify-center>
        <v-flex md10>
          <v-layout>
            <v-flex md2>
              <v-navigation-drawer>
                <v-list>
                  <v-list-tile @click="">
                    <v-list-tile-action>
                      <v-icon>mdi-home</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Home</v-list-tile-title>
                  </v-list-tile>

                  <v-list-group
                    prepend-icon="mdi-account"
                    append-icon="mdi-chevron-down"
                    value="true"
                  >
                    <v-list-tile slot="activator">
                      <v-list-tile-title>Users</v-list-tile-title>
                    </v-list-tile>

                    <v-list-group
                      no-action
                      sub-group
                      value="true"
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
            </v-flex>
            <v-flex
              md10
              class="white pa-4">
              content
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer/>
  </div>
</template>

<script>
export default {
  name: 'AccountSummaryVue',
  data () {
    return {
      accountActions: [
        {
          title: 'Mon compte'
        },
        {
          title: 'Preferences'
        },
        {
          title: 'Historique'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
