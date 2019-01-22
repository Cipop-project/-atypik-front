<template>
  <v-layout>
    <v-loading :is-loading="isLoading"/>
    <v-flex id="comments-box">
      <v-list>
        <v-flex
          v-for="(comment, i) in comments"
          :key="i">
          <!--<v-layout>-->
          <!--<v-flex-->
          <!--xs4-->
          <!--md2-->
          <!--lg1>-->
          <!--<v-avatar size="50">-->
          <!--<v-img-->
          <!--:src="comment.user.image"-->
          <!--class="justify-end"-->
          <!--alt="profile picture"/>-->
          <!--</v-avatar>-->
          <!--</v-flex>-->
          <!--<v-flex-->
          <!--xs8-->
          <!--md10-->
          <!--lg11>-->
          <!--<h5>{{ comment.user.name }}</h5>-->
          <!--</v-flex>-->
          <!--</v-layout>-->
        </v-flex>
        <template
          v-for="(comment, i) in comments">
          <v-list-tile
            :key="i"
            avatar
            @click="">
            <v-list-tile-avatar>
              <img :src="comment.user.image">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{ comment.user.name }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ comment.comment }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>{{ comment.date }}</v-list-tile-action-text>
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
  props: {
    product: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      isLoading: false,
      comments: [
        { user: { name: 'Carlos', image: 'https://picsum.photos/300?random' }, comment: 'dazefgahlkfk', date: new Date().toISOString().substring(0, 10) },
        { user: { name: 'Yang', image: 'https://picsum.photos/300?random' }, comment: 'dazefgahlkfkdazefgahlkfkdazefgahlkfkdazefgahlkfkdazefgahlkfkdazefgahlkfkdazefgahlkfkdazefgahlkfkdazefgahlkfkdazefgahlkfkdazefgahlkfkdazefgahlkfkdazefgahlkfkdazefgahlkfk', date: new Date().toISOString().substring(0, 10) },
        { user: { name: 'Alex', image: 'https://picsum.photos/300?random' }, comment: 'dazefgahlkfk', date: new Date().toISOString().substring(0, 10) }
      ],
      last: new Date() + 'T00:00:00.000Z'
    }
  },
  async mounted () {
    let tmp = await this.chargeComments()
  },
  methods: {
    async chargeComments () {
      this.isLoading = true
      let tmp = await Resource.loadComments(this.product, this.last)
      // this.comments.push(tmp.data)
      this.isLoading = false
    }
  }
}
</script>

<style scoped>

</style>
