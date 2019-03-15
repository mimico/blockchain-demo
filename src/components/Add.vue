<template>
  <div class="add">
    <h1>{{ msg }}</h1>
    <input v-model="num1" placeholder="first number">
    <input v-model="num2" placeholder="second number">
    <p>Sum is: {{ addNums }}</p>
  </div>
</template>

<script>
export default {
  name: 'Add',
  props: {
    msg: String
  },
  data: function() {
    return {
      num1: "",
      num2: ""
    }
  },
  computed: {
    addNums: function () {
      return parseInt(this.num1) + parseInt(this.num2);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
