<template>
  <div class="block">
    <label>DATA:</label>
    <input type="text" v-model="tempData" @keyup.enter="submit">
    <p>Previous hash: {{ prevHash }}</p>
    <p>Hash: {{ hash }}</p>
    <p>Timestamp: {{ timestamp }}</p>
    <p>Nonce: {{ nonce }}</p>
  </div>
</template>

<script>
export default {
  name: "Block",
  props: {
    blockNum: Number,
    data: String,
    prevHash: String,
    hash: String,
    timestamp: Number,
    nonce: Number
  },
  data() {
    return {
      tempData: ""
    };
  },
  methods: {
    submit: function() {
      this.$emit("inputData", {
        blockNum: this.blockNum,
        data: this.tempData
      });
    }
  },
  beforeMount() {
    this.tempData = this.data;
  }
};
</script>

<style scoped>
</style>
