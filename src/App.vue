<template>
  <div id="app">
    <Blockchain/>
  </div>
</template>

<script>
import Blockchain from "./components/Blockchain.vue";
import AddBlock from "./components/AddBlock.vue";

export default {
  name: "app",
  components: {
    Blockchain,
    AddBlock
  }
};
</script>

<style>
#app {
}
</style>
