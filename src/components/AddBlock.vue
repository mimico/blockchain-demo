<template>
  <div>
    <label>DATA:</label>
    <input type="text" placeholder="Enter a data" v-model="tempData">
    <button v-on:click="addBlock">+ Add New Block</button>
  </div>
</template>
<script>
export default {
  name: "AddBlock",
  data() {
    return {
      tempData: ""
    };
  },
  methods: {
    addBlock: function() {
      this.$emit("inputData", this.tempData);
      this.tempNum = "";
    }
  }
};
</script>
<style>
</style>
