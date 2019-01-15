<template>
  <v-container
    id="footer"
    fluid>
    <v-layout
      justify-center
      class="mt-5">
      <v-flex sm10>
        <hr>
        <v-layout>
          <v-flex xs4>
            <h4>A propos de nous</h4>
            <router-link :to="{ name: 'about' }">Qui sommes nous</router-link>
            <br>
            <router-link :to="{ name: 'host' }">Devenez hôte</router-link>
            <br>
            <router-link :to="{ name: 'contact' }">Contactez nous</router-link>
            <br>
          </v-flex>
          <v-flex xs4>
            <h4>Information</h4>
            <router-link :to="{ name: 'about' }">Plan du site</router-link>
            <br>
            <router-link :to="{ name: 'host' }">Recommander</router-link>
            <br>
            <router-link :to="{ name: 'contact' }">Contactez nous</router-link>
            <br>
          </v-flex>
          <v-flex xs4>
            <h4>AtypikHouse</h4>
            <router-link :to="{ name: 'about' }">Contactez nous</router-link>
            <br>
            <router-link :to="{ name: 'conditions' }">Mentions legales</router-link>
            <br>
            <br>
            <v-layout>
              <v-flex
                xs6
                md4>
                <v-select
                  :items="currencies"
                  append-icon="mdi-chevron-down"
                  solo
                  dense
                  height="20"/>
              </v-flex>
            </v-layout>
            <v-layout no-wrap>
              <v-flex
                xs4
                md2>
                <router-link :to="{ name: 'facebook' }">
                  <v-icon>mdi-facebook</v-icon>
                </router-link>
              </v-flex>
              <v-flex
                xs4
                md2>
                <router-link :to="{ name: 'twitter' }">
                  <v-icon>mdi-twitter</v-icon>
                </router-link>
              </v-flex>
              <v-flex
                xs4
                md2>
                <router-link :to="{ name: 'instagram' }">
                  <v-icon>mdi-instagram</v-icon>
                </router-link>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      currencies: ['EUR', 'USD']
    }
  }
}
</script>

<style scoped>
  #footer {
    min-height: 300px;
  }
</style>
