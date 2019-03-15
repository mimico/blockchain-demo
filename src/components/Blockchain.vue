<template>
  <div class="blockchain">
    <div id="blocks" v-for="(block, index) in blockList" :key="block.timestamp">
      <Block
        @inputData="updateNum"
        :prevValue="block.prevValue"
        :value="block.value"
        :blockNum="index"
      />
    </div>
    <p>List is: {{ blockList }}</p>
  </div>
</template>

<script>
import Block from "./Block.vue";

export default {
  components: {
    Block
  },
  data: function() {
    return {
      blockList: [
        { value: 0, prevValue: 0 },
        { value: 3, prevValue: 0 },
        { value: 8, prevValue: 3 }
      ]
    };
  },
  methods: {
    updateNum(payload) {
      this.blockList[payload.blockNum].value = payload.value;
      if (payload.blockNum < this.blockList.length - 1) {
        this.blockList[payload.blockNum + 1].prevValue = payload.value;
      }
    }
  }
};
</script>

<style scoped>
</style>
