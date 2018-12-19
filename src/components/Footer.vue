<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs10>
        <v-layout>
          <v-flex xs4>
            First
          </v-flex>
          <v-flex xs4>
            Second
          </v-flex>
          <v-flex xs4>
            Third
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  * {
    background-color: #6a8759;
  }
</style>
