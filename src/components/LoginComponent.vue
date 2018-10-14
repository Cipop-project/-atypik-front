<template>
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
</template>

<script>
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
