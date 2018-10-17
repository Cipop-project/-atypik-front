<!--<template>
  <div class="container-fluid">
    <div class="col-10 col-sm-6 col-md-4 col-lg-4 offset-1 offset-sm-3 offset-md-4 offset-lg-4 login-container">
      <form
        action=""
        class="form-group">
        <label for="name">Username</label>
        <input
          id="name"
          class="form-control"
          type="text"
          name="name">
        <br>
        <label for="password">Password</label>
        <input
          id="password"
          class="form-control"
          type="text"
          name="password">
        <br>
        <input
          class="form-control btn btn-success"
          type="button"
          name="submit"
          value="Log-in">
        <div class="login-options">
          <v-icon>mdi-facebook-box</v-icon>
        </div>
        <a href="">Forgot Password ?</a>
        <hr>
        <input
          class="form-control btn btn-info"
          type="button"
          name="sign-in"
          value="Sign-in">
      </form>
    </div>
  </div>
</template>-->
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
          <v-card-title>
            <h3
              class="text-xs-center">Connection</h3>
          </v-card-title>
          <v-card-text>
            <v-form
              ref="login_form"
              v-model="valid">
              <v-text-field
                v-model="name"
                label="Username or Email"
                required/>
              <v-text-field
                v-model="password"
                :type="'password'"
                label="Mot de passe"
                required/>
              <v-btn
                round
                color="success"
                @click="submit">Login</v-btn>
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
      name: '',
      password: '',
      valid: true
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
