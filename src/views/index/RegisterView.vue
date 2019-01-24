<template>
  <div>
    <v-header/>
    <v-container
      id="register-box"
      fluid
      fill-height>
      <v-layout
        align-center
        justify-center>
        <v-loading :is-loading="isLoading"/>
        <v-flex
          xs12
          sm8
          md4>
          <v-card
            class="elevation-6">
            <v-card-title
              class="justify-center">
              <h1>Creation du compte</h1>
            </v-card-title>
            <v-card-text>
              <v-form
                ref="signin_form"
                v-model="valid">
                <v-text-field
                  v-model="username"
                  :rules="usernameRules"
                  type="text"
                  label="Identifiant de connection"
                  prepend-icon="mdi-account"
                  suffix="*"
                  required/>
                <v-text-field
                  v-model="firstName"
                  :rules="nameRules"
                  label="Prenom"
                  prepend-icon="mdi-account"/>
                <v-text-field
                  v-model="lastName"
                  :rules="nameRules"
                  label="Nom"
                  prepend-icon="mdi-account"/>
                <v-text-field
                  v-model="password"
                  :rules="passwordRules"
                  type="password"
                  label="Mot de passe"
                  prepend-icon="mdi-lock-question"
                  suffix="*"
                  required/>
                <v-text-field
                  v-model="passwordConfirm"
                  :rules="passwordConfirmationRules"
                  type="password"
                  label="Confirmation de mot de passe"
                  prepend-icon="mdi-lock-question"
                  suffix="*"
                  required/>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  type="email"
                  label="Email"
                  prepend-icon="mdi-email"
                  suffix="*"
                  required/>
                <v-text-field
                  v-model="phone"
                  :rules="phoneRules"
                  type="number"
                  label="Numero de telephone (sans prefix eg: 682578674)"
                  prepend-icon="mdi-cellphone"/>
                <v-menu
                  :close-on-content-click="false"
                  v-model="birthdayCalendar"
                  :nudge-right="40"
                  lazy
                  transition="scale-transition"
                  full-width
                  offset-y>
                  <v-text-field
                    slot="activator"
                    v-model="birthday"
                    :rules="birthdayRules"
                    label="Date de naissance"
                    prepend-icon="mdi-calendar"
                    suffix="*"
                    readonly
                    required/>
                  <v-date-picker
                    v-model="birthday"
                    :min="minBirthday"
                    :max="maxBirthday"
                    color="green"
                    no-title
                    next-icon="mdi-chevron-right"
                    prev-icon="mdi-chevron-left"
                    show-current
                    @change="birthdayCalendar = false"/>
                </v-menu>
                <v-select
                  v-model="gender"
                  :items="genders"
                  item-text="name"
                  item-value="id"
                  append-icon="mdi-chevron-down"
                  label="Genre"
                  prepend-icon="mdi-human-male-female"/>
                <v-select
                  v-model="language"
                  :items="languages"
                  item-text="name"
                  item-value="id"
                  append-icon="mdi-chevron-down"
                  label="Langage par default"
                  prepend-icon="mdi-web"/>
                <v-select
                  v-model="currency"
                  :items="currencies"
                  item-text="name"
                  item-value="id"
                  append-icon="mdi-chevron-down"
                  label="Devise par default"
                  prepend-icon="mdi-currency-usd"/>
                <input
                  id="checkbox1"
                  type="checkbox"
                  class="mr-3"
                  checked>
                <label
                  class="form-check-label"
                  for="checkbox1">
                  J'accepte les <router-link to="/about/conditions">conditions generales d'utilisation</router-link>
                </label>
                <br>
                <br>
                <input
                  id="checkbox2"
                  v-model="advertisement"
                  type="checkbox"
                  class="mr-3">
                <label
                  class="form-check-label"
                  for="checkbox1">J'accepte des messages promotionelles de la part d'AtypikHouse
                </label>
                <v-layout
                  class="justify-center">
                  <v-btn
                    round
                    color="success"
                    @click="submit">Creer compte</v-btn>
                </v-layout>
              </v-form>
            </v-card-text>
            <v-atypik-alert
              ref="alert"
              :type="alert_type"
              :message="alert_text"
              :show="alert"/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer/>
  </div>
</template>

<script>
import Resource from '../../resources'
// import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      isLoading: false,
      alert: false,
      alert_type: 'warning',
      alert_text: '',
      email: '',
      username: '',
      firstName: '',
      lastName: '',
      password: '',
      passwordConfirm: '',
      phone: '',
      birthday: '',
      birthdayCalendar: false,
      gender: '',
      language: 'FR',
      currency: 'EUR',
      minBirthday: '1900-01-01',
      maxBirthday: new Date().toISOString().substring(0, 10),
      genders: [{ id: 'MALE', name: 'Homme' }, { id: 'FEMALE', name: 'Femme' }, { id: 'OTHER', name: 'Autre' }, { id: 'SECRET', name: 'Ne pas especifier' }],
      languages: [{ id: 'EN', name: 'English' }, { id: 'FR', name: 'Français' }],
      currencies: [{ id: 'EUR', name: 'Euro' }, { id: 'USD', name: 'Dollar Américain' }],
      valid: false,
      advertisement: false,
      status: {},
      emailRules: [
        v => !!v || 'l\'Email est obligatoire',
        v => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'Entrez une email valide'
      ],
      nameRules: [
        v => v.length < 200 || 'Maximum 200 caractères'
      ],
      usernameRules: [
        v => !!v || 'Saisir l\'identifiant est obligatoire',
        v => /[a-zA-Z._0-9]/.test(v) || 'Seulement characters alphanumeriques, undescore (_) et point (.) acceptés'
      ],
      birthdayRules: [
        v => /[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(v) || 'Entrez une date de naissance valide'
      ],
      passwordRules: [
        value => (value.length > 0 && value.length >= 8) || 'Minimum 8 caractères'
      ],
      passwordConfirmationRules: [
        v => this.password === v || 'Le mots de passe ne ocincident pas'
      ],
      phoneRules: [
        value => (value.length > 0) || 'Entrez un numero de telephone valide'
      ]
    }
  },
  methods: {
    ...mapActions(['register']),
    async submit () {
      this.isLoading = true
      if (this.$refs.signin_form.validate()) {
        console.log(this.$refs.signin_form)
        console.log('form data: ')
        console.log(this.formData())
        let data = await Resource.createUser(this.formData())
        data = data.body
        // const data = { status: -1001, message: 'unknown error' }
        this.isLoading = false
        console.log(data)
        if (data.status === 200) {
          this.alert_text = 'Votre compte a été crée, vous pouvez à present vous connecter'
          this.alert_type = 'success'
        } else {
          if (data.status === -1001) {
            this.alert_text = 'L\'email est dejà associé à une compte'
          } else if (data.status === -1002) {
            this.alert_text = 'L\'identifiant de connection est dejà utilisé'
          } else {
            this.alert_text = data.message
          }
          this.alert_type = 'error'
          this.valid = false
        }
        this.alert = true
      }
      this.isLoading = false
    },
    formData () {
      return {
        username: this.username,
        firstName: this.firstName,
        lastName: this.lastName,
        birthday: this.birthday + 'T00:00:00.000Z',
        email: this.email,
        language: this.language,
        password: this.password,
        phoneNumber: '+33' + this.phone,
        clientType: 'TENANT',
        pricingType: this.currency,
        advertisement: this.advertisement
      }
    }
  }
}
</script>

<style scoped>
    .btn {
        display: block;
        width: 50%;
        margin: auto;
    }
    .login-container {
        border: 1px solid gainsboro;
        padding: 1%;
    }
    #register-box {
      background-image: url('https://s3-eu-west-1.amazonaws.com/cipop/dev/index/home.jpg');
    }
</style>
