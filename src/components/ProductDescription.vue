<template>
  <v-layout id="descriptif-box">
    <v-flex
      v-for="(descriptif, i) in descriptifs"
      :key="i"
      sm12
      md6>
      <v-icon>{{ descriptif.icon }}</v-icon> {{ descriptif.public_name }} : {{ product[descriptif.name] }}
    </v-flex>

  </v-layout>
</template>

<script>
export default {
  name: 'ProductDescription',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      descriptifs: this.$store.state.descriptifs
    }
  }
}
</script>

<style scoped>
#descriptif-box {
  min-height: 100px;
}
</style>
