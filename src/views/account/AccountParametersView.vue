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
              <div class="form-group mt-2">
                <label>Vous decidez si vous voulez recevoir des nouvelles de notre part</label>
                <br>
                <input
                  v-model="user.advertisement"
                  type="checkbox"
                  @click="updateAdvertisement"> J'accepte de reçevoir la newsletter
              </div>
              <hr class="mt-4 mb-4">
              <h4>Preferences</h4>
              <div class="form-group">
                <label>Dites nous le moyen par lequel vous preferez qu'on vous contacte en cas de reservation</label>
                <select
                  id=""
                  class="form-control w-25"
                  name="">
                  <option value="email">Email</option>
                  <!--<option value="sms">SMS</option>-->
                </select>
              </div>
              <div v-if="user.type == 'host'">
                <hr class="mt-4 mb-4">
                <h4>Versement</h4>
                Quand vous recevez des paiements pour vos reservations, l'argent sera immediatement versé. Ajouter un mode de versement
                est donc necesaire pour commencer votre aventure en tant que host.
                <div class="text-xs-center mt-1">
                  <v-btn
                    color="green"
                    class="white--text text-xs-center">Ajouter un mode de versement</v-btn>
                </div>
              </div>
              <hr>
              Vous pouvez à tout moment desactiver votre compte, la desactivation de votre compte entraine la supression de vos annonces et
              votre information personel
              <br>
              <div class="text-xs-center mt-1">
                <v-btn
                  color="red"
                  class="white--text text-xs-center"
                  @click="deleteAccount">Desactiver compte</v-btn>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer/>
    <v-password-confirmation
      v-if="showModal"
      @confirmation="handleConfirmation()"
      @close="showModal = false"/></div>
</template>

<script>
import Resource from '../../resources'
export default {
  name: 'AccountEditView',
  data () {
    return {
      user: this.$store.state.user,
      showModal: false
    }
  },
  methods: {
    updateAdvertisement () {
      Resource.updateUser(this.user)
    },
    deleteAccount () {
      let tmp = confirm('Toute information relative à votre compte sera supprimé, etes-vous sûr de vouloir confirmer?')
      if (tmp) {
        this.showModal = true
      }
    },
    handleConfirmation (callback) {
      console.log('handle')
      if (callback === 'success') {
        console.log('delete account')
        Resource.deleteUser(this.user)
      } else {
        this.showModal = false
        console.log('cancelled')
      }
    }
  }
}
</script>
