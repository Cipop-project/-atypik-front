<template>
  <div class="container-fluid login-container">
    <div class="col-10 col-sm-6 col-md-4 col-lg-4 offset-1 offset-sm-3 offset-md-4 offset-lg-4">
      <form
        action=""
        class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          class="form-control"
          type="text"
          name="name">
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

</style>
