<template>
  <div>
    <v-layout class="message-box">
      <v-flex
        md4
        elevation-2>
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-list-tile
              :key="index"
              avatar
              ripple
              @click="loadMessage">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title>{{ item.last }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.time }}</v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider
              v-if="index + 1 < items.length"
              :key="`divider-${index}`"/>
          </template>
        </v-list>
      </v-flex>
      <v-flex md8>
        <v-layout
          v-if="messages"
          fill-height
          column
          class="pl-1">
          <v-flex md8>
            <v-list
              two-line
              class="scrollable-box">
              <template v-for="(message, index) in messages">
                <v-list-tile
                  :class="{ 'brown lighten-5': message.user.length > 0, 'brown lighten-4': message.user.length === 0 }"
                  :key="index"
                  avatar
                  ripple>
                  <v-list-tile-content
                    v-if="message.user.length > 0"
                    class="text-xs-right">
                    <v-list-tile-title class="text-xs-right">{{ message.user }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ message.content }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-content v-else>
                    <v-list-tile-title>Vous</v-list-tile-title>
                    <v-list-tile-sub-title>{{ message.content }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-list-tile-action-text>{{ message.time }}</v-list-tile-action-text>
                  </v-list-tile-action>
                </v-list-tile>
              </template>
            </v-list>
          </v-flex>
          <v-flex md4>
            <v-textarea
              solo
              hide-details
              label="message">
              daz
            </v-textarea>
            <v-layout justify-center><v-btn
              class="text-xs-center"
              color="success"
              @click="sendMessage">Envoyer</v-btn></v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'AccountMessagesView',
  data () {
    return {
      items: [
        {
          time: '15 min',
          title: 'Ali Connors',
          last: 'I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?'
        },
        {
          time: '2 hr',
          title: 'Sandra Adams',
          last: 'Do you have Paris recommendations? Have you ever been?\''
        },
        {
          time: 'Yesterday',
          title: 'Britta Holt',
          last: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
        },
        {
          time: '15 min',
          title: 'Ali Connors',
          last: 'Wish I could come, but I\'m out of town this weekend.'
        }
      ],
      messages: [
        {
          user: 'Ali Connors',
          content: 'blah bla',
          time: '20 min'
        },
        {
          user: '',
          content: 'blahazeazd bla',
          time: '25 min'
        },
        {
          user: 'Ali Connors',
          content: 'blah bla',
          time: '20 min'
        },
        {
          user: 'Ali Connors',
          content: 'blah bla',
          time: '20 min'
        },
        {
          user: 'Ali Connors',
          content: 'blah bla',
          time: '20 min'
        },
        {
          user: 'Ali Connors',
          content: 'blah bla',
          time: '20 min'
        },
        {
          user: 'Ali Connors',
          content: 'blah bla',
          time: '20 min'
        },
        {
          user: 'Ali Connors',
          content: 'blah bla',
          time: '20 min'
        }
      ]
    }
  },
  methods: {
    loadMessage () {
      console.log('ey')
    },
    sendMessage () {
      console.log('send message')
    }
  }
}
</script>

<style scoped>
.scrollable-box {
  overflow-y: auto;
  max-height: 450px;
}
.message-box {
  min-height: 600px;
  background-color: #fff;
}
</style>
