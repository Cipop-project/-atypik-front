<template>
    <div>
        <h1>Project init</h1>
        <div>
        	<hello-component name="world" />
        </div>
    </div>
</template>

<script>
	import HelloComponent from './components/HelloComponent.vue'

    export default {
        components: {
        	HelloComponent
        }
    }
</script>

<style scoped>

</style>