<template>
  <v-date-picker
    v-model="reservation"
    :min="minDate()"
    no-title
    multiple
    readonly
    color="green"
    next-icon="mdi-chevron-right"
    prev-icon="mdi-chevron-left"
    full-width
    @change="console.log(reserve)"/>
</template>

<script>
export default {
  name: 'DateRangePickerView',
  props: {
    reservation: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      reserve: this.reservation
    }
    // reserve () {
    //   return this.reservation
    // }
  },
  // watch: {
  //   reserve () {
  //     this.reserve[1] = this.reserve[2]
  //     console.log(this.reserve)
  //   }
  // },
  mounted () {
    // if (localStorage.searchData) {
    //   this.reservation[0] = JSON.parse(localStorage.searchData).startTime
    // }
    // this.reservation = new Date().toISOString().substring(0, 10)
  },
  methods: {
    minDate () {
      let v = new Date()
      v.setDate(v.getDate() - 1)
      return v.toISOString()
    },
    emitFrom () {
      console.log(this.reserve)
      this.$emit('custtom', this.reserve)
    }
  }
}
</script>

<style scoped>

</style>
