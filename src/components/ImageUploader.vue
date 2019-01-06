<template>
  <v-layout>
    <label for="file-input">
      <div
        class="add-box img-box justify-center text-xs-center mr-3">+</div>
    </label>
    <input
      id="file-input"
      type="file"
      accept="image"
      @change="uploadFile">
    <div class="img-box "><img
      src="/static/img/home_img_1.jpg"
      height="100"
      width="100"
      alt="zef"></div>
  </v-layout>
</template>

<script>
export default {
  name: 'ImageUploaderView',
  methods: {
    uploadFile (e) {
      let files = e.target.files
      if (files !== undefined) {
        let file = files[0]
        // upload file
        console.log(file.name)
      }
    }
  }
}
</script>

<style scoped>
  .add-box {
    border: 2px dashed grey;
    background-color: lightgray;
    font-size: 5em;
    color: grey;
    cursor: pointer;
  }
  .img-box {
    width: 100px;
    height: 100px;
  }
  input {
    display: none;
  }
</style>
