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
    <div
      v-for="(image, i) in images"
      :key="i"
      class="img-box">
      <img
        :src="image"
        height="100"
        width="100"
        alt="zef"></div>
  </v-layout>
</template>

<script>
export default {
  name: 'ImageUploaderView',
  data () {
    return {
      files: [],
      images: []
    }
  },
  methods: {
    uploadFile (e) {
      // console.log(e)
      let file = e.target.files[0]
      this.files.push(file)
      this.$emit('uploadImage', file)
      this.images.push(URL.createObjectURL(file))
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
