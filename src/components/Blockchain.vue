<template>
  <div class="blockchain">
    <ResetBlockchain @reset="reset"/>
    <div id="blocks" v-for="(block, index) in blockList" :key="index">
      <Block
        @inputData="updateNum"
        :prevValue="block.prevValue"
        :value="block.value"
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

export default {
  components: {
    Block,
    AddBlock,
    ResetBlockchain
  },
  data: function() {
    return {
      blockList: [{ value: 0, prevValue: 0 }]
    };
  },
  methods: {
    updateNum(payload) {
      this.blockList[payload.blockNum].value = payload.value;
      if (payload.blockNum < this.blockList.length - 1) {
        this.blockList[payload.blockNum + 1].prevValue = payload.value;
      }
    },
    addNewBlock(variable) {
      this.blockList.push({
        value: parseInt(variable),
        prevValue: this.blockList[this.blockList.length - 1].value
      });
    },
    reset() {
      this.blockList = [{ value: 0, prevValue: 0 }];
    }
  }
};
</script>

<style scoped>
</style>
