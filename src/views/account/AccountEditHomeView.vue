<template>
  <form>
    <v-loading :is-loading="updateLoading"/>
    <v-atypik-alert
      :show="alert"
      :type="alert_type"
      :message="alert_text"/>
    <v-btn
      class="brown darken-1 white--text"
      @click="productView()">Voir logement</v-btn>
    <div class=" form-group form-inline">
      <v-flex md2>
        <label
          for="formTitle"
          class="pr-4">Titre</label>
      </v-flex>
      <v-flex md7>
        <input
          id="formTitle"
          v-model="home.name"
          type="text"
          class="form-control w-100">
      </v-flex>
    </div>
    <div class=" form-group form-inline">
      <v-flex md2>
        <label
          for="formAddress"
          class="pr-4">Addresse</label>
      </v-flex>
      <v-flex md7>
        <input
          id="formAddress"
          v-model="home.address"
          type="text"
          class="form-control w-100">
      </v-flex>
    </div>
    <div class=" form-group form-inline">
      <v-flex md2>
        <label
          for="formCity"
          class="pr-4">Ville</label>
      </v-flex>
      <v-flex md7>
        <input
          id="formCity"
          v-model="home.city"
          type="text"
          class="form-control w-100">
      </v-flex>
    </div>
    <div class=" form-group form-inline">
      <v-flex md2>
        <label
          for="formZip"
          class="pr-4">Code postal</label>
      </v-flex>
      <v-flex md7>
        <input
          id="formZip"
          v-model="home.zipCode"
          type="number"
          max="99999"
          class="form-control w-100">
      </v-flex>
    </div>
    <div class="form-group form-inline">
      <v-flex md2>
        <label
          for="formDescription"
          class="pr-4">Description</label>
      </v-flex>
      <v-flex md7>
        <textarea
          id="formDescription"
          v-model="home.description"
          rows="6"
          class="form-control w-100"/>
      </v-flex>
    </div>
    <div class="form-group form-inline">
      <v-flex md2>
        <label class="pr-4">Photos</label>
      </v-flex>
      <v-flex md7>
        <v-image-uploader-edit
          :images="home.images"
          :files="files"/>
      </v-flex>
    </div>
    <div class=" form-group form-inline">
      <v-flex md2>
        <label
          for="formCategory"
          class="pr-4">Categorie</label>
      </v-flex>
      <v-flex md7>
        <select
          id="formCategory"
          v-model="home.type"
          name=""
          class="form-control w-50">
          <option value="CABANE">Cabane</option>
          <option value="ROULOTTE">Roulotte</option>
          <option value="TENTE">Tente</option>
          <option value="BATEAU">Bateau</option>
          <option value="YOURTE">Yourte</option>
          <option value="BULLE">Bulle</option>
          <option value="STUDIO">Studio</option>
          <option value="CHAMBRE">Chambre</option>
          <option value="AUTRE">Autre</option>
        </select>
      </v-flex>
    </div>
    <div class=" form-group form-inline">
      <v-flex md2>
        <label
          for="formMaxPeople"
          class="pr-4">Couchages</label>
      </v-flex>
      <v-flex md7>
        <input
          id="formMaxPeople"
          v-model="home.peopleNumber"
          type="number"
          class="form-control w-50">
      </v-flex>
    </div>
    <div class=" form-group form-inline">
      <v-flex md2>
        <label
          for="formPrice"
          class="pr-4">Prix par nuit</label>
      </v-flex>
      <v-flex md7>
        <input
          id="formPrice"
          v-model="home.amount"
          type="number"
          class="form-control w-50"
          @keyup="formatMoney">
      </v-flex>
    </div>
    <v-btn
      color="success"
      @click="submit()">Enregistrer</v-btn>
    <v-btn
      color="error"
      @click="deleteHome()">Effacer logement</v-btn>
  </form>
</template>

<script>
import Resource from '../../resources'
export default {
  name: 'AccountEditHomeView',
  data () {
    return {
      user: this.$store.state.user,
      home: {
        name: '',
        address: '',
        zipCode: '',
        city: '',
        description: '',
        images: [],
        imagesId: [],
        type: '',
        peopleNumber: 1,
        amount: 0
      },
      files: [],
      updateLoading: false,
      imagesBefore: [],
      alert: false,
      alert_text: '',
      alert_type: 'info'
    }
  },
  mounted: async function () {
    this.updateLoading = true
    const { data } = await Resource.readProduct(this.$route.params.home_slug)
    this.home = data.data
    this.imagesBefore = JSON.parse(JSON.stringify(data.data.images))
    this.updateLoading = false
  },
  methods: {
    formatMoney (e) {
      if (!isNaN(e.key)) {
        console.log(e.key)
      }
    },
    // async submit () {
    //   console.log('submit form')
    //   this.updateLoading = true
    //   const { data } = await Resource.updateHome(this.home)
    //   this.updateLoading = false
    //   if (data.status !== 0) {
    //     this.flashbag = { show: true, type: 'error', message: data.message }
    //   } else {
    //     this.flashbag = { show: true, type: 'success', message: 'Vos changements ont été enregistrés' }
    //   }
    // },
    async deleteHome () {
      let tmp = confirm('Etes-vous sûr de vouloir effacer ce logement ?')
      if (tmp) {
        this.updateLoading = true
        const data = await Resource.deleteProduct(this.home.id)
        console.log(data)
        this.updateLoading = false
        if (data.status !== 200) {
          this.alert_type = 'error'
          this.alert_text = data.message
          this.alert = true
        } else {
          // this.alert_type = 'success'
          // this.alert_text = 'Vos changements ont été enregistrés'
          // this.alert = true
          this.$router.push({ name: 'editHomes' })
        }
      }
    },
    productView () {
      let tmp = this.$router.resolve({ name: 'homeDetails', params: { home_slug: this.home.id } })
      window.open(tmp.href, '_blank')
    },
    async filterData (data) {
      let filtered = []
      for (let i = 0; i < data.length; i++) {
        console.log('appending image....')
        if (data[i].status === 200) {
          filtered.push(data[i].body.data.id)
        }
      }
      for (let i = 0; i < this.home.images.length; i++) {
        console.log('appending precharged image....')
        filtered.push(this.home.images[i].id)
      }
      return filtered
    },
    async promises (images) {
      let promises = []

      for (let i = 0; i < images.length; i++) {
        let formFile = new FormData()
        formFile.append('file', images[i])
        promises.push(Resource.createProductImage(formFile))
      }

      const results = await Promise.all(promises)
      return results
    },
    async submit () {
      this.updateLoading = true
      const data = await this.promises(this.files)
      console.log(data)
      const filteredData = await this.filterData(data)
      this.home.imagesId = filteredData
      console.log(filteredData)
      console.log('updating product...')
      const data2 = await Resource.updateProduct(this.home.id, this.formData())
      console.log(data2)
      this.updateLoading = false
      if (data2.status === 200 && data2.body.status === 200) {
        this.alert_text = 'Vos changements ont été bien enregistrés'
        this.alert_type = 'success'
        this.alert = true
        this.home = data2.body.data
      } else {
        this.alert_text = data2.body.message
        this.alert_type = 'error'
        this.alert = true
      }
    },
    formData () {
      return {
        address: this.home.address,
        amount: this.home.amount,
        city: this.home.city,
        clientId: this.user.id,
        clientType: this.user.clientType,
        country: 'France',
        description: this.home.description,
        imagesId: this.home.imagesId,
        name: this.home.name,
        peopleNumber: this.home.peopleNumber,
        type: this.home.type,
        zipCode: this.home.zipCode
      }
    }
  }
}
</script>

<style scoped>

</style>
