<template>
  <div class="block">
    <input placeholder="Enter a number" v-model="tempNum" @keyup.enter="submit">
  </div>
</template>

<script>
export default {
  name: "Block",
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
