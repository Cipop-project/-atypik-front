<template>
  <form action="">
    <v-loading :is-loading="loading"/>
    <v-atypik-alert
      :type="alert_type"
      :show="alert"
      :message="alert_text"/>
    <v-btn
      v-if="alert_btn"
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
        <v-image-uploader
          @uploadImage="updateImages"/>
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
          v-model="home.category"
          name=""
          class="form-control w-50">
          <option value="CABANE">Cabane</option>
          <option value="ROULOTTE">Roulotte</option>
          <option value="TENTE">Tente</option>
          <option value="BATEAU">Bateau</option>
          <option value="YOURTE">Yourte</option>
          <option value="BULLE">Bulle</option>
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
          v-model="home.maxPeople"
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
          v-model="home.price"
          type="number"
          class="form-control w-50"
          @keyup="formatMoney">
      </v-flex>
    </div>
    <v-btn
      color="success"
      @click="submit">Ajouter logement</v-btn>
  </form>
</template>

<script>
import Resource from '../../resources'
export default {
  name: 'AccountAddHomeView',
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
        imagesUrl: [],
        category: '',
        maxPeople: 1,
        type: '',
        price: 0
      },
      status: {},
      alert: false,
      alert_type: 'info',
      alert_text: '',
      alert_btn: false,
      loading: false
    }
  },
  methods: {
    updateImages (v) {
      this.home.images.push(v)
    },
    formatMoney (e) {
      if (!isNaN(e.key)) {
        console.log(e.key)
      }
    },
    productView () {
      let tmp = this.$router.resolve({ name: 'homeDetails', params: { home_slug: this.home.id } })
      window.open(tmp.href, '_blank')
    },
    async filterData (data) {
      let filtered = []
      for (let i = 0; i < data.length; i++) {
        console.log(data[i])
        if (data[i].status === 200) {
          filtered.push(data[i].body.data.id)
        }
      }
      return filtered
    },
    async promises (images) {
      let promises = []

      for (let i = 0; i < images.length; i++) {
        let formFile = new FormData()
        formFile.append('file', images[i])
        console.log('appending image....')
        promises.push(Resource.createProductImage(formFile))
      }

      const results = await Promise.all(promises)
      return results
    },
    async submit () {
      this.loading = true
      const data = await this.promises(this.home.images)
      console.log(data)
      const filteredData = await this.filterData(data)
      this.home.imagesUrl = filteredData
      console.log(filteredData)
      console.log('creating product')
      const data2 = await Resource.createProduct(this.formData())
      this.loading = false
      if (data2.status === 200 && data2.body.status === 200) {
        this.alert_text = 'Le logement a été crée'
        this.alert_type = 'success'
        this.alert = true
        this.alert_btn = true
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
        amount: this.home.price,
        city: this.home.city,
        clientId: this.user.id,
        clientType: this.user.clientType,
        country: 'France',
        description: this.home.description,
        imagesId: this.home.imagesUrl,
        name: this.home.name,
        peopleNumber: this.home.maxPeople,
        type: this.home.category,
        zipCode: this.home.zipCode
      }
    }
  }
}
</script>

<style scoped>

</style>
