<template>
  <div class="blockchain">
    <b-navbar type="dark" variant="info">
      <b-navbar-brand href="#">Blockchain Demo</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <ResetBlockchain />
      </b-navbar-nav>
    </b-navbar>
    <div id="blocks" v-for="(block, index) in blockList" :key="index">
      <Block
        :data="block.data"
        :prevHash="block.prevHash"
        :hash="block.hash"
        :timestamp="block.timestamp"
        :nonce="block.nonce"
        :blockNum="index"
      />
    </div>
    <AddBlock />
    <p>List is: {{ blockList }}</p>
  </div>
</template>

<script>
import Block from "./Block.vue";
import AddBlock from "./AddBlock.vue";
import ResetBlockchain from "./ResetBlockchain.vue";
// const BC_DIFFICULTY = 0

// https://stackoverflow.com/a/26375459
function toHex(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    result += str.charCodeAt(i).toString(16);
  }
  return result;
}

export default {
  components: {
    Block,
    AddBlock,
    ResetBlockchain
  },
  computed: {
    blockList() {
      return this.$store.getters.blockList
    },
  },
  // methods: {
  //   updateData(payload) {
  //     this.blockList[payload.blockNum].data = payload.data;
  //     if (payload.blockNum < this.blockList.length - 1) {
  //       this.blockList[payload.blockNum + 1].prevHash = "0xDEADBEEF";
  //     }
  //   },
 
  //   reset() {
  //     this.blockList = [
  //       {
  //         data: "Genesis block data",
  //         prevHash: "0xDEADBEEF",
  //         hash: "0xDEADBEEF",
  //         timestamp: Date.now(),
  //         nonce: 0
  //       }
  //     ];
  //     this.hashBlock(0);
  //   },
  //   hashBlock(index) {
  //     let blWithoutHash = {
  //       data: this.blockList[index].data,
  //       timestamp: this.blockList[index].timestamp,
  //       previous_hash: this.blockList[index].previous_hash,
  //       nonce: this.blockList[index].nonce
  //     };
  //     let stringifiedBl = JSON.stringify(blWithoutHash);
  //     let hexifiedBl = toHex(stringifiedBl);
  //     this.blockList[index].hash = ethers.utils.keccak256("0x" + hexifiedBl);
  //   }
  // },
  beforeMount() {
    this.$store.commit('reset')
  }
};
</script>

<style scoped>
</style>
