<template>
  <v-autocomplete
    v-model="city"
    :items="cities"
    hide-details
    item-text="city"
    item-value="city_id"
    placeholder="Destination"
    class="mr-2"
    append-icon="mdi-place"
    solo/>
</template>

<script type="es6">
import Resource from '../resource'

export default {
  name: 'AtypikSelectView',
  data () {
    return {
      cities: []
    }
  },
  async mounted () {
    this.options = await this.fetchOptions()
  }
}
</script>
