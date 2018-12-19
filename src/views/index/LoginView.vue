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
            <h1>Connection</h1>
          </v-card-title>
          <v-card-text>
            <v-form
              ref="login_form"
              v-model="valid">
              <v-text-field
                v-model="name"
                type="email"
                label="Email"
                required/>
              <v-text-field
                v-model="password"
                :type="'password'"
                label="Mot de passe"
                required/>
              <v-layout
                justify-center>
                <v-btn
                  round
                  color="success"
                  @click="submit">Login</v-btn>
                <h3 class="mt-2">or</h3>
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
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      name: '',
      password: '',
      valid: true
    }
  },
  methods: {
    ...mapActions(['login']),
    submit () {
      if (this.$refs.login_form.validate()) {
        this.login({ username: this.name, password: this.password })
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
