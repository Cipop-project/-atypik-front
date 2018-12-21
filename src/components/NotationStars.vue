<template>
  <span>
    <v-star-rating
      :rating="note"
      :read-only="true"
      :increment="0.01"
      :star-size="17"/>
  </span>
</template>

<script>
export default {
  name: 'NotationStars',
  props: {
    note: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
