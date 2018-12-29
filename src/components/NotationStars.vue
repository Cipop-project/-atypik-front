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
import StarRating from 'vue-star-rating'
export default {
  name: 'NotationStars',
  components: {
    'v-star-rating': StarRating
  },
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
