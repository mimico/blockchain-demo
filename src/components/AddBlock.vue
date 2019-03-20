<template>
  <b-card class="block">
    <b-container fluid>
      <b-row>
        <b-col>Data:</b-col>
        <b-col cols="9">
          <b-form-input
            type="text"
            placeholder="Enter data for next block"
            v-model="newBlockData"
            @keyup.enter="addBlock"
          />
        </b-col>
      </b-row>
      <b-row>
        <b-col></b-col>
        <b-col>
          <b-button class="addBlock" v-on:click="addBlock">+ ADD NEW BLOCK</b-button>
        </b-col>
      </b-row>
    </b-container>
  </b-card>
</template>
<script>
export default {
  name: "AddBlock",
  computed: {
    newBlockData: {
      get() {
        return this.$store.state.newBlockData;
      },
      set(value) {
        this.$store.commit("setNewBlockData", value);
      }
    }
  },
  data() {
    return {
      tempData: ""
    };
  },
  methods: {
    addBlock: function() {
      this.$store.commit("addNewBlock");
    }
  }
};
</script>

<style>
.block {
  width: 50rem;
  margin-left: auto;
  margin-right: auto;
}

.addBlock {
    margin-top: 30px;
    background: linear-gradient(45deg,#d4145a,#fbb03b);
    color: #fff;
}
</style>
