<template>
  <div class="blockchain">
    <div id="blocks">
      <Block @inputData="updateNum"/>
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
      blockList: [0]
    };
  },
  methods: {
    updateNum(variable) {
      this.blockList.push(parseInt(variable));
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
