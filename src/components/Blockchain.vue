<template>
  <div class="blockchain">
    <ResetBlockchain @reset="reset"/>
    <div id="blocks" v-for="(block, index) in blockList" :key="index">
      <Block
        @inputData="updateData"
        :data="block.data"
        :prevHash="block.prevHash"
        :hash="block.hash"
        :timestamp="block.timestamp"
        :nonce="block.nonce"
        :blockNum="index"
      />
    </div>
    <AddBlock @inputData="addNewBlock"/>
    <p>List is: {{ blockList }}</p>
  </div>
</template>

<script>
import Block from "./Block.vue";
import AddBlock from "./AddBlock.vue";
import ResetBlockchain from "./ResetBlockchain.vue";
// const BC_DIFFICULTY = 0

export default {
  components: {
    Block,
    AddBlock,
    ResetBlockchain
  },
  data: function() {
    return {
      blockList: [
        {
          data: "Genesis block data",
          prevHash: "0xDEADBEEF",
          hash: "0xDEADBEEF",
          timestamp: Date.now(),
          nonce: 0
        }
      ]
    };
  },
  methods: {
    updateData(payload) {
      this.blockList[payload.blockNum].data = payload.data;
      if (payload.blockNum < this.blockList.length - 1) {
        this.blockList[payload.blockNum + 1].prevHash = "0xDEADBEEF";
      }
    },
    addNewBlock(variable) {
      this.blockList.push({
        data: variable,
        prevHash: "0xDEADBEEF",
        hash: "0xDEADBEEF",
        timestamp: Date.now(),
        nonce: 0
      });
    },
    reset() {
      this.blockList = [
        {
          data: "Genesis block data",
          prevHash: "0xDEADBEEF",
          hash: "0xDEADBEEF",
          timestamp: Date.now(),
          nonce: 0
        }
      ];
    }
  }
};
</script>

<style scoped>
</style>
