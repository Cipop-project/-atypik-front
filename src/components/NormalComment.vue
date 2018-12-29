<template>
  <v-layout>
    <v-flex md1>
      <v-avatar
        size="75">
        <v-img
          :src="comment.user.photo"
          class="justify-center"
          alt="profile picture"/>
      </v-avatar>
    </v-flex>
    <v-flex md8>
      <h4>{{ comment.user.name }}</h4>
      <p>{{ comment.content }}</p>
      <small>{{ comment.user.location }} - {{ comment.date }}</small>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'NormalCommentVue',
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
