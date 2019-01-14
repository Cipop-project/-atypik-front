<template>
  <v-autocomplete
    v-model="city"
    :items="cities"
    hide-details
    item-text="city"
    item-value="city"
    placeholder="Destination"
    class="mr-2"
    append-icon="mdi-place"
    solo/>
</template>

<script type="es6">
import ProductResource from '../../resources'

export default {
  name: 'AtypikSelectView',
  data () {
    return {
      cities: []
    }
  },
  async mounted () {
    this.cities = await this.fetchOptions()
  },
  methods: {
    async fetchOptions () {
      const { data: cities } = await ProductResource.findCities()
      return cities
    }
  }
}
</script>
