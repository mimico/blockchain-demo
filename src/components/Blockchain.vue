<template>
  <div class="blockchain">
    <div id="blocks" v-for="block in blockList" :key="block">
      <Block @inputData="updateNum" v-bind:prevValue="block.prevValue" v-bind:value="block.value" />
    </div>
    <p>List is: {{ blockList }}</p>
    <p>Sum is: {{ listSum }}</p>
  </div>
</template>

<script>
import Block from "./Block.vue";

function getSum(total, num) {
  return total + num;
}

export default {
  components: {
    Block
  },
  data: function() {
    return {
      blockList: [{value: 0, prevValue: 0 }]
    };
  },
  methods: {
    updateNum(variable) {
     // this.blockList.push({parseInt(variable), );
      this.blockList.push({value: parseInt(variable), prevValue: this.blockList[this.blockList.length-1].value});
      console.log(this.blockList);
    }
  },
  computed: {
    listSum: function() {
      return this.blockList.reduce(getSum);
    }
  }
};
</script>

<style scoped>
</style>
