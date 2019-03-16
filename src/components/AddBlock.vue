<template>
  <div>
    <label>DATA:</label>
    <input type="text" placeholder="Enter a number" v-model="tempNum">
    <button v-on:click="addBlock">+ Add New Block</button>
  </div>
</template>
<script>
export default {
  name: "AddBlock",
  props: {
    value: Number,
    prevValue: Number
  },
  data() {
    return {
      tempNum: ""
    };
  },
  methods: {
    addBlock: function() {
      this.$emit("inputData", this.tempNum);
      this.tempNum = "";
    }
  }
};
</script>
<style>
</style>
