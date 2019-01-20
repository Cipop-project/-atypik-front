<template>
  <div>
    <v-header/>
    <v-layout justify-center>
      <v-flex xs10>
        <v-layout>
          <v-flex md2>
            <v-layout v-if="user.clientType=='LANDLORD'">
              <v-host-profile-navigation/>
            </v-layout>
            <v-layout v-else>
              <v-user-profile-navigation/>
            </v-layout>
          </v-flex>
          <v-flex
            md10
            class="pa-4 pl-5">
            <router-view/>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-footer/>
  </div>
</template>

<script>
export default {
  name: 'AccountView',
  data () {
    return {
      user: this.$store.state.user
    }
  }
}
</script>

<style scoped>

</style>
