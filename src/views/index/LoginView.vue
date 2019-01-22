<template>
  <div>
    <v-header/>
    <v-container
      id="login-box"
      fluid
      fill-height>
      <v-layout
        align-center
        justify-center>
        <v-flex
          xs12
          sm8
          md4>
          <v-loading :is-loading="isLoading"/>
          <v-card
            class="elevation-6">
            <v-card-title
              class="justify-center">
              <h1>Connection</h1>
            </v-card-title>
            <v-card-text>
              <v-form
                ref="login_form"
                v-model="valid">
                <p
                  v-if="valid === false"
                  class="error--text">{{ status.message }}</p>
                <v-text-field
                  v-model="name"
                  :rules="emptyRule"
                  label="Email"
                  name="email"
                  required/>
                <v-text-field
                  v-model="password"
                  :rules="emptyRule"
                  type="password"
                  label="Mot de passe"
                  name="password"
                  autocomplete="current-password"
                  required/>
                <v-layout
                  justify-center>
                  <v-btn
                    round
                    color="success"
                    @click="submit">Se connecter</v-btn>
                  <h4 class="mt-2">ou</h4>
                  <v-btn
                    round
                    color="info"
                    to="/signin">Creer compte</v-btn>
                </v-layout>
              </v-form>
            </v-card-text>
            <v-atypik-alert
              :show="alert"
              :message="alert_text"
              :type="alert_type"/>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>
    <v-footer/>
  </div>
</template>

<script>
import Resource from '../../resources'
import jwtDecode from 'jwt-decode'
import { mapActions } from 'vuex'
export default {
  name: 'LoginView',
  data () {
    return {
      isLoading: false,
      alert: false,
      alert_type: 'info',
      alert_text: '',
      name: '',
      password: '',
      valid: true,
      status: {
        data: {},
        message: '',
        status: 0
      },
      emptyRule: [
        v => !!v || 'Champ obligatoire'
      ]
    }
  },
  methods: {
    ...mapActions(['login']),
    async submit () {
      if (this.$refs.login_form.validate()) {
        this.isLoading = true
        this.status = await Resource.login({ username: this.name, password: this.password })
        // this.status = { status: 403, statusText: 'compte non trouvé' }
        if (this.status.status === 200) {
          const token = this.status.headers.map.authorization[0]
          localStorage.user = JSON.stringify({ token: token })
          let data = await Resource.readUser(jwtDecode(token)['sub'])
          this.$store.state.loggedIn = true
          localStorage.user = JSON.stringify({ user: data.data.data, token: token })
          this.$router.push({ name: 'account' })
        } else {
          // can't log in
          console.log(this.status.message)
          this.valid = false
          this.alert_text = this.status.statusText
          this.alert_type = 'error'
          this.alert = true
        }
        this.isLoading = false
      }
    }
  }
}
</script>

<style scoped>
  .text-center {
    text-align: center;
  }
  .btn {
    display: block;
    width: 50%;
    margin: auto;
  }
  #login-box {
    background-image: url('https://s3-eu-west-1.amazonaws.com/cipop/dev/index/home.jpg');
  }
</style>
