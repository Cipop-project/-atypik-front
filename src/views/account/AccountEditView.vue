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
                        :selected="i === user.birthday.split('-')[2].substring(0, 2)"
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
                        :selected="year === user.birthday.split('-')[0]"
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
                      <option value="EN">English</option>
                      <option value="FR">Français</option>
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
                      v-model="user.currency"
                      name="Currency"
                      class="form-control w-25">
                      <option value="USD">US Dollar</option>
                      <option value="EUR">Euro</option>
                    </select>
                  </v-flex>
                </div>
                <v-btn
                  color="success"
                  @click="submit()">Enregistrer</v-btn>
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
      user: this.$store.state.user,
      months: this.$store.state.months,
      years: this.$store.state.years
    }
  },
  methods: {
    submit () {
      console.log('submit form')
    }
  }
}
</script>
