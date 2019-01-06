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
              <form action="">
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for=""
                      class="pr-4">Titre</label>
                  </v-flex>
                  <v-flex md7>
                    <input
                      type="text"
                      class="form-control w-100">
                  </v-flex>
                </div>
                <div class="form-group form-inline">
                  <v-flex md2>
                    <label
                      for=""
                      class="pr-4">Description</label>
                  </v-flex>
                  <v-flex md7>
                    <textarea
                      rows="6"
                      class="form-control w-100"/>
                  </v-flex>
                </div>
                <div class="form-group form-inline">
                  <v-flex md2>
                    <label
                      for=""
                      class="pr-4">Photos</label>
                  </v-flex>
                  <v-flex md7>
                    <v-image-uploader/>
                  </v-flex>
                </div>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for=""
                      class="pr-4">Categorie</label>
                  </v-flex>
                  <v-flex md7>
                    <select
                      id=""
                      name=""
                      class="form-control w-50">
                      <option value="">Cabane</option>
                      <option value="">Roulote</option>
                      <option value="">Tente</option>
                      <option value="">Bateau</option>
                      <option value="">Yourte</option>
                      <option value="">Bulle</option>
                      <option value="">Autre</option>
                    </select>
                  </v-flex>
                </div>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for=""
                      class="pr-4">Couchages</label>
                  </v-flex>
                  <v-flex md7>
                    <input
                      type="number"
                      class="form-control w-50">
                  </v-flex>
                </div>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for=""
                      class="pr-4">Type</label>
                  </v-flex>
                  <v-flex md7>
                    <select
                      id=""
                      name=""
                      class="form-control w-50">
                      <option value="">Logement entier</option>
                      <option value="">Chambre</option>
                      <option value="">Chambre d'hotel</option>
                      <option value="">Logement d'hotel</option>
                      <option value="">Autre</option>
                    </select>
                  </v-flex>
                </div>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for=""
                      class="pr-4">Prix par nuit</label>
                  </v-flex>
                  <v-flex md7>
                    <input
                      type="text"
                      class="form-control w-50"
                      @keyup="formatMoney">
                  </v-flex>
                </div>
              </form>
            </v-flex>
          </v-layout>
          <div class="text-xs-center">
            <v-btn
              color="success"
              @click="submit()">Ajouter logement</v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer/>
  </div>
</template>

<script>
export default {
  name: 'AccountAddHomeView',
  data () {
    return {
      user: this.$store.state.user
    }
  },
  methods: {
    formatMoney (e) {
      if (!isNaN(e.key)) {
        console.log(e.key)
      }
    }
  }
}
</script>

<style scoped>

</style>
