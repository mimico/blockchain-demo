<template>
  <b-card class="block">
    <b-container fluid>
      <b-row>
        <b-col>Data:</b-col>
        <b-col cols="9">
          <b-form-input type="text" v-model="data" @keyup.enter="submit"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col>Previous hash:</b-col>
        <b-col cols="9" class="hex">{{ block.prevHash }}</b-col>
      </b-row>
      <b-row>
        <b-col>Hash:</b-col>
        <b-col cols="9" class="hex">{{ block.hash }}</b-col>
      </b-row>
      <b-row>
        <b-col>Timestamp:</b-col>
        <b-col cols="9">{{ block.timestamp }}</b-col>
      </b-row>
      <b-row>
        <b-col>Nonce:</b-col>
        <b-col cols="9">{{ block.nonce }}</b-col>
      </b-row>
    </b-container>
  </b-card>
</template>

<script>
export default {
  name: "Block",
  props: {
    blockNum: Number
  },
  computed: {
    block: {
      get() {
        return this.$store.getters.block(this.blockNum);
      }
    },
    data: {
      get() {
        return this.block.data;
      },
      set(value) {
        this.$store.commit("updateBlockData", {
          blockNum: this.blockNum,
          data: value
        });
      }
    }
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
.hex {
  font-family: monospace;
}
.block {
  max-width: 50rem;
  margin-top: 0.25em;
  margin-bottom: 0.25em;
  margin-left: auto;
  margin-right: auto;
}
</style>
