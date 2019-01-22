<template>
  <form id="form">
    <v-loading :is-loading="updateLoading"/>
    <v-atypik-alert
      :show="alert"
      :message="alert_text"
      :type="alert_type"/>
    <div class=" form-group form-inline">
      <v-avatar size="180">
        <v-img
          id="image"
          :src="user.iconAddressUrl ? user.iconAddressUrl : '/static/img/user_placeholder.png'"
          class="justify-center"
          alt="profile picture"
          @click="$refs.image.click()"/>
      </v-avatar> Cliquez sur l'image pour changer l'image de profil
      <input
        ref="image"
        type="file"
        accept="image/*"
        hidden
        @change="onFileSelected">
    </div>
    <div class=" form-group form-inline">
      <v-flex md2>
        <label
          for="first_name"
          class="pr-4">Prenom</label>
      </v-flex>
      <v-flex md7>
        <input
          id="first_name"
          v-model="user.firstName"
          type="text"
          class="form-control w-100">
      </v-flex>
    </div>
    <div class=" form-group form-inline">
      <v-flex md2>
        <label
          for="last_name"
          class="pr-4">Nom</label>
      </v-flex>
      <v-flex md7>
        <input
          id="last_name"
          v-model="user.lastName"
          type="text"
          class="form-control w-100">
      </v-flex>
    </div>
    <div class=" form-group form-inline">
      <v-flex md2>
        <label
          class="pr-4">Date de naissance</label>
      </v-flex>
      <v-flex md7>
        <select
          v-model="birth_day"
          name="birth day"
          class="form-control">
          <option
            v-for="i in 31"
            :key="i"
            :value="i">{{ i }}</option>
        </select>
        <select
          v-model="birth_month"
          name="birth month"
          class="form-control">
          <option
            v-for="(month, i) in months"
            :key="i"
            :value="i + 1">{{ month.name }}</option>
        </select>
        <select
          v-model="birth_year"
          name="birth year"
          class="form-control">
          <option
            v-for="(year, i) in years"
            :key="i"
            :value="year">{{ year }}</option>
        </select>
      </v-flex>
    </div>
    <div class=" form-group form-inline">
      <v-flex md2>
        <label
          for="sexe"
          class="pr-4">Sexe</label>
      </v-flex>
      <v-flex md7>
        <select
          id="sexe"
          v-model="user.sexe"
          name="sexe"
          class="form-control">
          <option value="MALE">Homme</option>
          <option value="FEMALE">Femme</option>
          <option value="OTHER">Autre</option>
          <option value="SECRET">Ne pas especifier</option>
        </select>
      </v-flex>
    </div>
    <div class=" form-group form-inline">
      <v-flex md2>
        <label
          for="description"
          class="pr-4">Votre description</label>
      </v-flex>
      <v-flex md7>
        <textarea
          id="description"
          v-model="user.description"
          name="description"
          cols="30"
          rows="5"
          class="form-control w-100"/>
      </v-flex>
    </div>
    <div class=" form-group form-inline">
      <v-flex md2>
        <label
          for="email"
          class="pr-4">Email</label>
      </v-flex>
      <v-flex md7>
        <input
          id="email"
          v-model="user.email"
          type="text"
          class="form-control w-100">
      </v-flex>
    </div>
    <div class=" form-group form-inline">
      <v-flex md2>
        <label
          for="phone"
          class="pr-4">Telephone</label>
      </v-flex>
      <v-flex md7>
        <input
          id="phone"
          v-model="user.phoneNumber"
          type="text"
          class="form-control w-100">
      </v-flex>
    </div>
    <div class=" form-group form-inline">
      <v-flex md2>
        <label
          for="address"
          class="pr-4">Lieu de residence</label>
      </v-flex>
      <v-flex md7>
        <input
          id="address"
          v-model="user.address"
          type="text"
          class="form-control w-100">
      </v-flex>
    </div>
    <div class=" form-group form-inline">
      <v-flex md2>
        <label
          for="language"
          class="pr-4">Langue préférée</label>
      </v-flex>
      <v-flex md7>
        <select
          id="language"
          v-model="user.language"
          name="Language"
          class="form-control w-25">
          <option
            v-for="(language, i) in languages"
            :key="i"
            :selected="language.code === user.language"
            :value="language.code">{{ language.name }}</option>
        </select>
      </v-flex>
    </div>
    <div class=" form-group form-inline">
      <v-flex md2>
        <label
          for="currency"
          class="pr-4">Devise préférée</label>
      </v-flex>
      <v-flex md7>
        <select
          id="currency"
          v-model="user.pricingType"
          name="Currency"
          class="form-control w-25">
          <option
            v-for="(currency, i) in currencies"
            :key="i"
            :selected="currency.code === user.pricingType"
            :value="currency.code">{{ currency.name }}</option>
        </select>
      </v-flex>
    </div>
    <v-btn
      color="success"
      @click="submit()">Enregistrer</v-btn>
  </form>
</template>

<script>
import Resource from '../../resources'
export default {
  name: 'AccountEditView',
  data () {
    return {
      birth_day: parseInt(this.$store.state.user.birthday.split('-')[2].substring(0, 2)),
      birth_month: parseInt(this.$store.state.user.birthday.split('-')[1]),
      birth_year: parseInt(this.$store.state.user.birthday.split('-')[0]),
      user: this.$store.state.user,
      months: this.$store.state.months,
      years: this.$store.state.years,
      languages: this.$store.state.languages,
      currencies: this.$store.state.currencies,
      updateLoading: false,
      alert: false,
      alert_type: 'info',
      alert_text: '',
      img_changed: false,
      file: false
    }
  },
  mounted () {
    console.log(this.$store.state.user)
  },
  methods: {
    async submit () {
      console.log('submit form')
      this.updateLoading = true
      let mTmp = this.birth_month <= 9 ? '-0' + this.birth_month : this.birth_month
      let dTmp = this.birth_day <= 9 ? '-0' + this.birth_day : this.birth_day
      this.user.birthday = this.birth_year + mTmp + dTmp + 'T00:00:00.00Z'
      const data = await Resource.updateUser(this.user)
      if (data.status !== 200 && data.body.status !== 0) {
        this.alert_type = 'error'
        this.alert_text = 'Nous n\'avons pas reussi à completer votre demande, re-essayer ou contactez nous'
      } else {
        if (this.img_changed) {
          let formFile = new FormData()
          formFile.append('file', this.file)
          const data2 = await Resource.updateUserImage(this.user.id, formFile)
          console.log('after image change: ')
          console.log(data2)
          if (data2.status === 200 && data2.body.status === 200) {
            console.log('tout est ok')
            this.alert_type = 'success'
            this.alert_text = 'Vos changements ont été enregistrées'
            let tmpSt = JSON.parse(localStorage.user)
            tmpSt.user = data2.body.data
            localStorage.user = JSON.stringify(tmpSt)
            this.$store.state.user = tmpSt.user
          }
        } else {
          this.alert_type = 'success'
          this.alert_text = 'Vos changements ont été enregistrées'
        }
      }
      this.alert = true
      this.updateLoading = false
    },
    onFileSelected (e) {
      this.file = e.target.files[0]
      this.user.iconAddressUrl = URL.createObjectURL(this.file)
      this.img_changed = true
    }
  }
}
</script>
<style scoped>
  #image {
    cursor: pointer;
  }
</style>
