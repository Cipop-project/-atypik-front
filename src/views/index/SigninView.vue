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
              ref="login_form"
              v-model="valid">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                prepend-icon="mdi-email"
                required/>
              <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Prenom"
                prepend-icon="mdi-account"
                required/>
              <v-text-field
                v-model="lastName"
                :rules="lastNameRules"
                label="Nom"
                prepend-icon="mdi-account"
                required/>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                type="'password'"
                label="Mot de passe"
                prepend-icon="mdi-lock-question"
                required/>
              <v-text-field
                v-model="passwordConfirm"
                :rules="passwordRules"
                type="'password'"
                label="Confirmation de mot de passe"
                prepend-icon="mdi-lock-question"
                required/>
              <v-text-field
                v-model="phone"
                :rules="phoneRules"
                label="Numero de telephone"
                prepend-icon="mdi-cellphone"
                required/>
              <v-text-field
                v-model="birthday"
                :rules="birthdayRules"
                label="Date de naissance"
                prepend-icon="mdi-calendar-range"
                required/>
              <v-text-field
                v-model="gender"
                :rules="genderRules"
                label="Genre"
                prepend-icon="mdi-human-male-female"
                required/>
              <v-text-field
                v-model="language"
                :rules="languageRules"
                label="Langage par default"
                prepend-icon="mdi-web"
                required/>
              <v-text-field
                v-model="currency"
                :rules="currencyRules"
                label="Devise par default"
                prepend-icon="mdi-currency-usd"
                required/>
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
      gender: '',
      language: '',
      currency: '',
      valid: true,
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      passwordRules: [
        value => value.length >= 8 || 'Minimum 8 chars'
      ]
    }
  },
  methods: {
    submit () {
      if (this.$refs.login_form.validate()) {
        // ok
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
