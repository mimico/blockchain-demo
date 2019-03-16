<template>
  <div>
    <b-button v-on:click="reset">Reset Blockchain</b-button>
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
