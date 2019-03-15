<template>
  <div class="block">
    <label>DATA:</label>
    <input type="text" v-model="tempNum" @keyup.enter="submit">
    <p>Previous Value: {{ prevValue }}</p>
  </div>
</template>

<script>
export default {
  name: "Block",
  props: {
    blockNum: Number,
    value: Number,
    prevValue: Number
  },
  data() {
    return {
      tempNum: ""
    };
  },
  methods: {
    submit: function() {
      console.log("block event")
      this.$emit("inputData", { blockNum: this.blockNum, value: parseInt(this.tempNum) });
    }
  },
  beforeMount() {
    this.tempNum = this.value;
  }
};
</script>

<style scoped>
</style>
