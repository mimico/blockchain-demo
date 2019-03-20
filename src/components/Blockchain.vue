<template>
  <div class="blockchain">
    <b-navbar type="dark" variant="info">
      <b-navbar-brand href="#">Blockchain Demo</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <ResetBlockchain/>
      </b-navbar-nav>
    </b-navbar>
    <div id="blocks" v-for="(block, index) in blockList" :key="index">
      <Block :blockNum="index"/>
    </div>
    <AddBlock/>
  </div>
</template>

<script>
import Block from "./Block.vue";
import AddBlock from "./AddBlock.vue";
import ResetBlockchain from "./ResetBlockchain.vue";

export default {
  components: {
    Block,
    AddBlock,
    ResetBlockchain
  },
  computed: {
    blockList() {
      return this.$store.getters.blockList;
    }
  },
  beforeMount() {
    this.$store.commit("reset");
  }
};
</script>

<style scoped>
</style>
