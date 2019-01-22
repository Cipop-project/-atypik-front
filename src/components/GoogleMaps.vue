<template>
  <div>
    <GmapMap
      id="map"
      :center="center"
      :zoom="8"
      map-type-id="roadmap"
    >
      <GmapMarker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: 'GoogleMaps',
  data () {
    return {
      center: { lat: 10, lng: 10 },
      markers: [
        { lat: 10, lng: 10 }
      ]
    }
  }
}
</script>

<style scoped>
  #map {
    width: 100%;
    height: 400px;
  }
</style>
