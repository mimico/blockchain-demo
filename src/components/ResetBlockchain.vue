<template>
  <div>
    <span id="difficulty_level">difficulty level:</span>
    <input class="difficulty" type="text" v-model="difficulty"/>
    <b-button id="reset_btn" v-on:click="reset">Reset Blockchain</b-button>
  </div>
</template>
<script>
export default {
  name: "ResetBlockchain",
  data: function() {
      return {
        difficulty: 2
      };
  },
  methods: {
    reset: function() {
      this.$store.commit("updateDifficulty", parseInt(this.difficulty));
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
#difficulty_level {
  color: white;
  margin-right: 5px;
  font-size: 12px;
}
#reset_btn {
      background: linear-gradient(45deg,#000,#777);
}
</style>
