<template>
  <v-layout>
    <v-loading :is-loading="isLoading"/>
    <v-flex id="comments-box">
      <v-list>
        <template
          v-for="(comment, i) in comments">
          <v-list-tile
            :key="i"
            avatar
            @click="">
            <v-list-tile-avatar>
              <img
                src="/static/img/home.jpg"
                alt="user profile picture">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ comment.clientId }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ comment.description }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>{{ comment.createdAt.substring(0, 10) }}</v-list-tile-action-text>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import Resource from '../resources'
export default {
  name: 'ProductComments',
  data () {
    return {
      product: this.$router.currentRoute.path.split('/')[2],
      isLoading: false,
      comments: [],
      last: new Date() + 'T00:00:00.000Z'
    }
  },
  async mounted () {
    console.log('mounted')
    console.log(this.product)
    // const tm = await Resource.createProductComment({ clientId: 'Client_10001', productId: '40284681687c0eee01687c11e7240001', description: 'description', commentStarType: 'SATISFIED' })
    // console.log(tm)
    const { data } = await Resource.readProductComment(this.product)
    this.comments = data.data
    console.log(data)
  }
}
</script>

<style scoped>

</style>
