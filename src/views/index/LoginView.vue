<template>
  <div>
    <v-header/>
    <v-container/>
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
                  label="Email"
                  name="email"
                  required/>
                <v-text-field
                  v-model="password"
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
                    @click="submit">Login</v-btn>
                  <h4 class="mt-2">or</h4>
                  <v-btn
                    round
                    color="info"
                    to="/signin">Create account</v-btn>
                </v-layout>
              </v-form>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-footer/>
  </div>
</template>

<script>
import Resource from '../../resources'
import { mapActions } from 'vuex'
export default {
  name: 'LoginView',
  data () {
    return {
      name: '',
      password: '',
      valid: true,
      status: {
        data: {},
        message: '',
        status: 0
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    async submit () {
      if (this.$refs.login_form.validate()) {
        this.status = await Resource.login({ username: this.name, password: this.password })
        if (this.status.status === 0) {
          this.$store.state.loggedIn = true
          this.$router.push({ name: 'homepage' })
        } else {
          // can't log in
          console.log(this.status.message)
          this.valid = false
        }
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
  .login-container {
    border: 1px solid gainsboro;
    padding: 1%;
  }
</style>
