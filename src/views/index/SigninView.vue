<template>
  <v-container
    fluid
    fill-height>
    <v-layout
      align-center
      justify-center>
      <v-flex
        xs12
        sm8
        md4>
        <v-card
          class="elevation-6">
          <v-card-title
            class="justify-center">
            <h1>Account creation</h1>
          </v-card-title>
          <v-card-text>
            <v-form
              ref="signin_form"
              v-model="valid">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                prepend-icon="mdi-email"
                suffix="*"
                required/>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Prenom"
                prepend-icon="mdi-account"/>
              <v-text-field
                v-model="lastName"
                :rules="lastNameRules"
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
                v-model="phone"
                :rules="phoneRules"
                type="number"
                label="Numero de telephone"
                prepend-icon="mdi-cellphone"
                prefix="+"/>
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
              <v-layout
                class="justify-center">
                <v-btn
                  round
                  color="success"
                  @click="submit">Create account</v-btn>
              </v-layout>
            </v-form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      name: '',
      lastName: '',
      password: '',
      passwordConfirm: '',
      phone: '',
      birthday: '',
      birthdayCalendar: false,
      gender: '',
      language: '',
      currency: '',
      minBirthday: '1900-01-01',
      maxBirthday: '2018-12-01',
      genders: ['Man', 'Woman', 'I prefer not to specify'],
      languages: [{ id: 'EN', name: 'English' }, { id: 'FR', name: 'Français' }],
      currencies: [{ id: 'EUR', name: 'Euro' }, { id: 'USD', name: 'Dollar Américain' }, { id: 'GBP', name: 'Livre Sterling' }],
      valid: true,
      emailRules: [
        v => !!v || 'l\'Email est obligatoire',
        v => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'Entrez une email valide'
      ],
      nameRules: [
        v => v.length < 200 || 'Maximum 200 caractères'
      ],
      lastNameRules: [
        v => v.length < 200 || 'Maximum 200 caractères'
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
    submit () {
      if (this.$refs.signin_form.validate()) {
        axios.post('http://admin:123456@localhost:8001/api/clients', {
          username: (this.name ? this.name : '') + ' ' + (this.lastName ? this.lastName : ''),
          email: this.email,
          phoneNumber: (this.phone ? this.phone : ''),
          password: this.password,
          language: (this.language ? this.language : 'FR'),
        })
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
</style>
