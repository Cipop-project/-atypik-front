<template>
  <v-img
    :src="item.img"
    height="300"
    @click="$router.push({ name: 'search', params: { region: 'Nord-Pas-De-Calais' } })"
    class="clickable">
    <v-layout
      align-end
      justify-center
      row
      fill-height>
      <v-card
        class="card-layout transparent mb-2 pa-2">
        <h4 class="white--text text-xs-center">{{ item.title }}</h4>
        <!--<h5 class="white&#45;&#45;text text-xs-center ">{{ item.count }} Logements</h5>-->
      </v-card>
    </v-layout>
  </v-img>
</template>

<script>
export default {
  name: 'BigCard',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .clickable {
    cursor: pointer;
  }
  .card-layout {
    background-color: rgba(0, 0, 0, 0.20)!important;
    border: 2px solid lightgray!important;
    /*border-right: 3px solid ghostwhite!important;*/
    border-style: ridge!important;
    /*height: 400px;*/
  }
</style>
