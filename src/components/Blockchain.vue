<template>
  <div class="blockchain">
    <div>
      <ResetBlockchain @reset="reset"/>
    </div>
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
        prevHash: this.blockList[this.blockList.length - 1].hash,
        hash: "0xDEADBEEF",
        timestamp: Date.now(),
        nonce: 0
      });
      this.hashBlock(this.blockList.length - 1);
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
      this.hashBlock(0);
    },
    hashBlock(index) {
      let blWithoutHash = {
        data: this.blockList[index].data,
        timestamp: this.blockList[index].timestamp,
        previous_hash: this.blockList[index].previous_hash,
        nonce: this.blockList[index].nonce
      };
      let stringifiedBl = JSON.stringify(blWithoutHash);
      let hexifiedBl = toHex(stringifiedBl);
      this.blockList[index].hash = ethers.utils.keccak256("0x" + hexifiedBl);
    }
  },
  beforeMount() {
    this.hashBlock(0);
  }
};
</script>

<style scoped>
</style>
