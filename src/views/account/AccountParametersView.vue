<template>
  <div>
    <v-header/>
    <v-container fluid>
      <v-layout justify-center>
        <v-flex xs10>
          <v-layout>
            <v-flex md2>
              <v-layout v-if="user.type=='host'">
                <v-host-profile-navigation/>
              </v-layout>
              <v-layout v-else>
                <v-user-profile-navigation/>
              </v-layout>
            </v-flex>
            <v-flex
              md10
              class="pa-4 pl-5">
              <h4>Confidentialité</h4>
              <div class="form-group mt-5">
                <label>Vous decidez si vous voulez recevoir des nouvelles de notre part</label>
                <br>
                <input type="checkbox"> J'accepte de reçevoir la newsletter
              </div>
              <hr class="mt-4 mb-4">
              <div class="form-group">
                <label>Dites nous le moyen par lequel vous preferez qu'on vous contacte en cas de reservation</label>
                <select
                  id=""
                  class="form-control w-25"
                  name="">
                  <option value="email">Email</option>
                  <option value="sms">SMS</option>
                </select>
              </div>
              <hr class="mt-4 mb-4">
              Vous pouvez à tout moment desactiver votre compte, la desactivation de votre compte entraine la supression de vos annonces,
              conformement aux reglements concernant les données personelles, elles seront garder en securité pendant 2 ans.
              <br>
              <div class="text-xs-center">
                <v-btn
                  color="red"
                  class="white--text text-xs-center">Desactiver compte</v-btn>
              </div>
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
  name: 'AccountEditView',
  data () {
    return {
      user: this.$store.state.user
    }
  }
}
</script>
