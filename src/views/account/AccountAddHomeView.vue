<template>
  <form action="">
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
        <v-image-uploader v-model="home.images"/>
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
          for="formType"
          class="pr-4">Type</label>
      </v-flex>
      <v-flex md7>
        <select
          id="formType"
          v-model="home.type"
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
          for="formPrice"
          class="pr-4">Prix par nuit</label>
      </v-flex>
      <v-flex md7>
        <input
          id="formPrice"
          v-model="home.price"
          type="text"
          class="form-control w-50"
          @keyup="formatMoney">
      </v-flex>
    </div>
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
        description: '',
        images: [],
        category: '',
        maxPeople: 1,
        type: '',
        price: 0
      },
      status: {}
    }
  },
  methods: {
    formatMoney (e) {
      if (!isNaN(e.key)) {
        console.log(e.key)
      }
    },
    async submit () {
      this.status = await this.register()
    },
    async register () {
      let tmp = {}
      for (let i = 0; i < this.home.images.length; i++) {
        console.log(i)
        tmp = await this.registerImages()
        console.log(tmp)
        if (tmp.status !== 0) {
          return tmp
        }
      }
      tmp = await this.registerHome()
      return tmp
    },
    async registerImages () {
      console.log('registering image')
      const data = await Resource.registerHomeImage(this.home.images)
      return data
    },
    async registerHome () {
      console.log('registering home')
      const data = await Resource.registerHome(this.home)
      return data
    }
  }
}
</script>

<style scoped>

</style>
