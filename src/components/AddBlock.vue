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
          <button class="addBlock" v-on:click="addBlock">+ ADD NEW BLOCK</button>
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
    margin-bottom: 10px;
    border-radius: 6.25em;
    padding: 10px 15px;
    height: auto;
    background: linear-gradient(45deg,#222,#17a2b8);
    border: none;
    color: #fff;
    animation: pulseShadow 1.5s infinite;
}
@keyframes pulseShadow {
  0% {
            box-shadow: 0 0 0 0 rgba(23, 162, 184, .5);
  }
  50% {
            box-shadow: 0 0 0 15px rgba(23, 162, 184, 0)
  }
  100% {
            box-shadow: 0 0 0 0 rgba(23, 162, 184, 0);
  }
}
</style>
