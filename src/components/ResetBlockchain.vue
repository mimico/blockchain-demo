<template>
  <div>
    <button v-on:click="reset">Reset Blockchain</button>
  </div>
</template>
<script>
export default {
  name: "ResetBlockchain",
  methods: {
    reset: function() {
      this.$emit("reset");
    }
  }
};
</script>
<style>
</style>
