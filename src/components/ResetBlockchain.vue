<template>
  <div>
    difficulty level:
    <input class="difficulty" type="text" v-model="difficulty"/>
    <b-button v-on:click="reset">Reset Blockchain</b-button>
  </div>
</template>
<script>
export default {
  name: "ResetBlockchain",
  methods: {
    reset: function() {
      this.$store.commit("reset");
    }
  }
};
</script>
<style>
.difficulty {
  width: 25px;
  margin-right: 15px;
  text-align: center;
}
</style>
