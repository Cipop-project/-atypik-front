<template>
  <div>
    <v-loading :is-loading="loading"/>
    <h2>Devenir Hôte</h2>
    <p>En devenant hôte, vous pourrez ajouter des logements ainsi que gerer les reservations et reçevoir vos revenus directement sur votre compte</p>
    <v-btn
      color="#ACB641"
      class="white--text"
      @click="becomeHost">Devenir hôte</v-btn>
  </div>
</template>

<script>
import Resource from '../../resources'
export default {
  name: 'BecomeHostAccount',
  data () {
    return {
      user: this.$store.state.user,
      loading: false
    }
  },
  methods: {
    async becomeHost () {
      this.loading = true
      this.user.clientType = 'LANDLORD'
      const data = await Resource.updateUser(this.user)
      console.log(data)
      if (data.status === 200 && data.body.status === 200) {
        let tmpSt = JSON.parse(localStorage.user)
        tmpSt.user = this.user
        console.log(tmpSt)
        localStorage.user = JSON.stringify(tmpSt)
        this.$store.state.user = tmpSt.user
        this.$router.push({ name: 'account' })
      }
      this.loading = false
    }
  }
}
</script>

<style scoped>

</style>
