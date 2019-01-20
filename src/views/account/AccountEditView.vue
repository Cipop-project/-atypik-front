<template>
  <v-loading v-if="updateLoading"/>
  <form v-else>
    <v-flashbag
      ref="flashbag"
      :flashbag="flashbag"/>
    <!--<div class=" form-group form-inline">-->
    <!--<v-flex md2>-->
    <!--<label-->
    <!--for=""-->
    <!--class="pr-4">Prenom</label>-->
    <!--</v-flex>-->
    <!--<v-flex md7>-->
    <!--<input-->
    <!--v-model="user.name"-->
    <!--type="text"-->
    <!--class="form-control w-100">-->
    <!--</v-flex>-->
    <!--</div>-->
    <div class=" form-group form-inline">
      <v-flex md2>
        <label
          for="formName"
          class="pr-4">Nom complet</label>
      </v-flex>
      <v-flex md7>
        <input
          id="formName"
          v-model="user.name"
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
          name="birth day"
          class="form-control">
          <option
            v-for="i in 31"
            :key="i"
            :selected="i === parseInt(user.birthday.split('-')[2].substring(0, 2))"
            value="i">{{ i }}</option>
        </select>
        <select
          name="birth month"
          class="form-control">
          <option
            v-for="(month, i) in months"
            :key="i"
            :selected="month.format === user.birthday.split('-')[1]"
            value="month.format">{{ month.name }}</option>
        </select>
        <select
          name="birth year"
          class="form-control">
          <option
            v-for="(year, i) in years"
            :key="i"
            :selected="year === parseInt(user.birthday.split('-')[0])"
            value="year">{{ year }}</option>
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
          <option value="">Ne pas especifier</option>
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
      user: this.$store.state.user,
      months: this.$store.state.months,
      years: this.$store.state.years,
      languages: this.$store.state.languages,
      currencies: this.$store.state.currencies,
      updateLoading: false,
      flashbag: { show: false }
    }
  },
  methods: {
    async submit () {
      console.log('submit form')
      this.updateLoading = true
      const data = await Resource.updateUser(this.user)
      this.updateLoading = false
      if (data.status !== 0) {
        this.flashbag = { show: true, type: 'error', message: data.message }
      } else {
        this.flashbag = { show: true, type: 'success', message: 'Vos changements ont été enregistrés' }
      }
    }
  }
}
</script>
