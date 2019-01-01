<template>
  <div>
    <!--<v-header/>-->
    <!--<v-container fluid>-->
    <!--<v-layout justify-center>-->
    <!--<v-flex xs10>-->
    <!--<v-layout>-->
    <!--<v-flex md2>-->
    <!--<v-layout v-if="user.type=='host'">-->
    <!--<v-host-profile-navigation/>-->
    <!--</v-layout>-->
    <!--<v-layout v-else>-->
    <!--<v-user-profile-navigation/>-->
    <!--</v-layout>-->
    <!--</v-flex>-->
    <!--<router-view/>-->
    <!--</v-layout>-->
    <!--</v-flex>-->
    <!--</v-layout>-->
    <!--</v-container>-->
    <!--<v-footer/>-->
    {{ $route.params.id }}
    <br>
    <!--<router-view/>-->
  </div>
</template>

<script>
export default {
  name: 'AccountView'
}
</script>

<style scoped>

</style>
