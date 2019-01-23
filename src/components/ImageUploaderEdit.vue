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
        :src="image.addressUrl"
        height="100"
        width="100"
        alt="image du logement"
        @click="removeImage(i)">
    </div>
    <div
      v-for="(img, k) in added"
      :key="k"
      class="img-box">
      <img
        :src="img"
        height="100"
        width="100"
        alt="image du logement"
        @click="removeAdded(k)">
    </div>
  </v-layout>
</template>

<script>
export default {
  name: 'ImageUploaderEdit',
  props: {
    images: {
      type: Array,
      required: true
    },
    files: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      added: []
    }
  },
  methods: {
    uploadFile (e) {
      let file = e.target.files[0]
      this.files.push(file)
      this.added.push(URL.createObjectURL(file))
    },
    removeImage (i) {
      console.log(this.images[i])
      this.images.splice(i, 1)
    },
    removeAdded (i) {
      console.log(this.added[i])
      this.files.splice(i, 1)
      this.added.splice(i, 1)
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
