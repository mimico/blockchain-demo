<template>
  <div id="app">
  <!--  <img alt="Vue logo" src="./assets/logo.png"> -->
    <Add msg="Adding is fun"/>
  </div>
</template>

<script>
import Add from './components/Add.vue'

export default {
  name: 'app',
  components: {
    Add
  }
}
</script>

<style>
#app {
}
</style>
