<template>
  <div>
    <v-header/>
    <v-container fluid>
      <v-layout justify-center>
        <v-flex md10>
          <v-layout>
            <v-flex md2>
              <v-profile-navigation/>
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
