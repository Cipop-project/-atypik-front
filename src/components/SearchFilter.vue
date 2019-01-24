<template>
  <v-layout
    elevation-2
    class="filter-box"
    pa-2>
    <v-flex>
      <div class="">
        <h4>Filters</h4>
      </div>
      <hr>
      <h5><b>Type:</b></h5>
      <template
        v-for="(type, i) in types">
        <div :key="i">
          <input
            :value="type.id"
            v-model="checks[i]"
            type="checkbox"
            @change="filterData">
          {{ type.name }}
          <br>
        </div>
      </template>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'SearchFilter',
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      checks: [false, false, false],
      types: [
        { name: 'Cabane', id: 'CABANE' },
        { name: 'Roulotte', id: 'ROULOTTE' },
        { name: 'Yourte', id: 'YOURTE' }
      ],
      filtered: []
    }
  },
  watch: {
    data () {
      this.filtered = this.data
    }
  },
  mounted () {
    this.filtered = this.data
  },
  methods: {
    async filterData () {
      let filters = await this.getAllIndexes(this.checks, true)
      console.log(filters)
      if (filters.length === 0) {
        this.filtered = this.data
      } else {
        this.filtered = this.filtered.filter(product => filters.includes(product.type))
      }
      this.$emit('filter', this.filtered)
    },
    // watch: {
    //   filtered () {
    //     this.$emit('filter', this.filtered)
    //   }
    // },
    getAllIndexes (arr, val) {
      let indexes = []
      let i = -1
      while ((i = arr.indexOf(val, i + 1)) !== -1) {
        indexes.push(this.types[i].id)
      }
      return indexes
    }
  }
}
</script>

<style scoped>
.filter-box {
  background-color: #fff;

}
</style>
