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
              <form>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for=""
                      class="pr-4">Prenom</label>
                  </v-flex>
                  <v-flex md7>
                    <input
                      type="text"
                      class="form-control w-100">
                  </v-flex>
                </div>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for=""
                      class="pr-4">Nom</label>
                  </v-flex>
                  <v-flex md7>
                    <input
                      type="text"
                      class="form-control w-100">
                  </v-flex>
                </div>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for=""
                      class="pr-4">Date de naissance</label>
                  </v-flex>
                  <v-flex md7>
                    <select
                      id=""
                      name=""
                      class="form-control">
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                    </select>
                    <select
                      id=""
                      name=""
                      class="form-control">
                      <option value="01">Janvier</option>
                      <option value="02">Fevrier</option>
                      <option value="03">Mars</option>
                      <option value="04">Avril</option>
                    </select>
                    <select
                      id=""
                      name=""
                      class="form-control">
                      <option value="1900">1900</option>
                      <option value="1901">1901</option>
                      <option value="1902">1902</option>
                    </select>
                  </v-flex>
                </div>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for=""
                      class="pr-4">Sexe</label>
                  </v-flex>
                  <v-flex md7>
                    <select
                      id=""
                      name=""
                      class="form-control">
                      <option value="Homme">Homme</option>
                      <option value="Femme">Femme</option>
                      <option value="Autre">Autre</option>
                      <option value="">Je prefère garder ça pour moi</option>
                    </select>
                  </v-flex>
                </div>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for=""
                      class="pr-4">Votre description</label>
                  </v-flex>
                  <v-flex md7>
                    <textarea
                      id=""
                      name=""
                      cols="30"
                      rows="5"
                      class="form-control w-100"/>
                  </v-flex>
                </div>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for=""
                      class="pr-4">Email</label>
                  </v-flex>
                  <v-flex md7>
                    <input
                      type="text"
                      class="form-control w-100">
                  </v-flex>
                </div>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for=""
                      class="pr-4">Lieu de residence</label>
                  </v-flex>
                  <v-flex md7>
                    <input
                      type="text"
                      class="form-control w-100">
                  </v-flex>
                </div>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for=""
                      class="pr-4">Langue préférée</label>
                  </v-flex>
                  <v-flex md7>
                    <select
                      id=""
                      name=""
                      class="form-control w-25">
                      <option value="english">English</option>
                      <option value="french">Français</option>
                    </select>
                  </v-flex>
                </div>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for=""
                      class="pr-4">Devise préférée</label>
                  </v-flex>
                  <v-flex md7>
                    <select
                      id=""
                      name=""
                      class="form-control w-25">
                      <option value="dollar">US Dollar</option>
                      <option value="euro">Euro</option>
                    </select>
                  </v-flex>
                </div>
                <v-btn @click="submit()" color="success">Enregistrer</v-btn>
              </form>
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
  },
  methods: {
    submit () {
      console.log('submit form')
    }
  }
}
</script>
