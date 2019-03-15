<template>
  <div id="app">
    <Block msg="Blockchain is fun"/>
  </div>
</template>

<script>
import Block from "./components/Block.vue";

export default {
  name: "app",
  components: {
    Block
  }
};
</script>

<style>
#app {
}
</style>
