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
              <v-loading v-if="updateLoading"/>
              <form v-else>
                <v-btn
                  class="brown darken-1 white--text"
                  @click="productView()">Voir logement</v-btn>
                <v-flashbag
                  ref="flashbag"
                  :flashbag="flashbag"/>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for="formTitle"
                      class="pr-4">Titre</label>
                  </v-flex>
                  <v-flex md7>
                    <input
                      id="formTitle"
                      v-model="product.name"
                      type="text"
                      class="form-control w-100">
                  </v-flex>
                </div>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for="description"
                      class="pr-4">Description</label>
                  </v-flex>
                  <v-flex md7>
                    <textarea
                      id="description"
                      v-model="product.description"
                      name="description"
                      cols="30"
                      rows="5"
                      class="form-control w-100"/>
                  </v-flex>
                </div>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for="address"
                      class="pr-4">Address</label>
                  </v-flex>
                  <v-flex md7>
                    <input
                      id="address"
                      v-model="product.address"
                      type="text"
                      class="form-control w-100">
                  </v-flex>
                </div>
                <div class="form-group form-inline">
                  <v-flex md2>
                    <label
                      for="city"
                      class="pr-4">Ville</label>
                  </v-flex>
                  <v-flex md7>
                    <input
                      id="city"
                      v-model="product.city"
                      type="text"
                      class="form-control w-100">
                  </v-flex>
                </div>
                <div class="form-group form-inline">
                  <v-flex md2>
                    <label
                      for="zipCode"
                      class="pr-4">Code postal</label>
                  </v-flex>
                  <v-flex md7>
                    <input
                      id="zipCode"
                      v-model="product.zipCode"
                      type="text"
                      class="form-control w-100">
                  </v-flex>
                </div>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for="country"
                      class="pr-4">Pays</label>
                  </v-flex>
                  <v-flex md7>
                    <input
                      id="country"
                      v-model="product.country"
                      type="text"
                      class="form-control w-100">
                  </v-flex>
                </div>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for="people"
                      class="pr-4">Maximum de personnes</label>
                  </v-flex>
                  <v-flex md7>
                    <input
                      id="people"
                      v-model="product.peopleNumber"
                      type="number"
                      class="form-control w-100">
                  </v-flex>
                </div>
                <div class=" form-group form-inline">
                  <v-flex md2>
                    <label
                      for="price"
                      class="pr-4">Prix par nuit</label>
                  </v-flex>
                  <v-flex md7>
                    <input
                      id="price"
                      v-model="product.amount"
                      type="number"
                      class="form-control w-100">
                  </v-flex>
                </div>
                <div class="form-group form-inline">
                  <v-flex md2>
                    <label class="pr-4">Photos</label>
                  </v-flex>
                  <v-flex md7>
                    <v-image-uploader v-model="product.images"/>
                  </v-flex>
                </div>
                <v-btn
                  color="success"
                  @click="submit()">Enregistrer</v-btn>
                <v-btn
                  color="error"
                  @click="deleteHome()">Effacer logement</v-btn>
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
import Resource from '../../resources'
export default {
  name: 'AccountEditHomeView',
  data () {
    return {
      user: this.$store.state.user,
      product: {},
      updateLoading: false,
      flashbag: { show: false }
    }
  },
  mounted: async function () {
    this.updateLoading = true
    const { data } = await Resource.searchProduct(this.$route.params.home_slug)
    this.product = data.data
    this.updateLoading = false
  },
  methods: {
    async submit () {
      console.log('submit form')
      this.updateLoading = true
      const { data } = await Resource.updateHome(this.product)
      this.updateLoading = false
      if (data.status !== 0) {
        this.flashbag = { show: true, type: 'error', message: data.message }
      } else {
        this.flashbag = { show: true, type: 'success', message: 'Vos changements ont été enregistrés' }
      }
    },
    async deleteHome () {
      let tmp = confirm('Etes-vous sûr de vouloir effacer ce logement ?')
      if (tmp) {
        this.updateLoading = true
        const { data } = await Resource.deleteHome(this.product)
        this.updateLoading = false
        if (data.status !== 0) {
          this.flashbag = { show: true, type: 'error', message: data.message }
        } else {
          this.flashbag = { show: true, type: 'success', message: 'Vos changements ont été enregistrés' }
        }
      }
    },
    productView () {
      let tmp = this.$router.resolve({ name: 'homeDetails', params: { home_slug: this.product.id } })
      window.open(tmp.href, '_blank')
    }
  }
}
</script>

<style scoped>

</style>
