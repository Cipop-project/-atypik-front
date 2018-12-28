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
              class="pa-4 pl-5">
              <v-layout >
                <v-flex md3>
                  <v-avatar
                    size="200">
                    <v-img
                      :src="user.photo"
                      class="justify-center"
                      alt="profile picture"/>
                  </v-avatar>
                </v-flex>
                <v-flex md9>
                  <h3>{{ user.name }} {{ user.last_name }}</h3>
                  <h4>
                    <b>{{ user.inscription_date }}<br>{{ user.location }}</b>
                  </h4>
                </v-flex>
              </v-layout>
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
  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>

</style>
