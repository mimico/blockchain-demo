<template>
  <div class="block">
    <label>DATA: </label>
    <input type="text" placeholder="Enter a number" v-model="tempNum" @keyup.enter="submit">
    <p>Previous Value: {{ prevValue }}</p>
    <p>Value: {{ value }}</p>
  </div>
</template>

<script>
export default {
  name: "Block",
  props: {
    value: Number,
    prevValue: Number
  },
  data() {
    return {
      tempNum: ""
    }
  },
  methods:{
    submit: function () {
      this.$emit("inputData", this.tempNum)
      this.tempNum = ""
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
