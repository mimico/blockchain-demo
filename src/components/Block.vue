<template>
  <b-card class="block">
    <b-container fluid>
      <b-row>
        <b-col>Data:</b-col>
        <b-col cols="9">
          <b-form-input type="text" v-model="data"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col>Previous hash:</b-col>
        <b-col
          cols="9"
          class="hex"
          v-bind:class="{ invalid: !previousHashIsValid }"
        >{{ block.prevHash }}</b-col>
      </b-row>
      <b-row>
        <b-col>Hash:</b-col>
        <b-col cols="9" class="hex" v-bind:class="{ invalid: !valid }">{{ block.hash }}</b-col>
      </b-row>
      <b-row>
        <b-col>{{ block.timestamp.toLocaleString() }}</b-col>
        <b-col class="text-right">
          <div v-if="valid">{{ block.nonce }}</div>
          <div v-else>
            difficulty level:
            <input class="difficulty" type="text" v-model="difficulty"/>
            <b-button class="remine" v-on:click="remine">⛏️</b-button>
          </div>
        </b-col>
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
    },
    valid: function() {
      return this.$store.getters.isBlockValid(this.blockNum);
    },
    previousHashIsValid: function() {
      return this.$store.getters.previousHashIsValid(this.blockNum);
    }
  },
  methods: {
    remine: function() {
      this.$store.commit("remineBlock", this.blockNum);
    }
  }
};
</script>

<style scoped>
.remine {
  background: linear-gradient(45deg, rgb(0, 198, 255), rgb(0, 114, 255));
  color: white;
  border: transparent;
  box-shadow: rgba(50, 50, 93, 0.1) 0px 7px 14px,
    rgba(0, 0, 0, 0.08) 0px 3px 6px;
  width: 40px;
  padding: 0;
  font-size: 16px;
  border-radius: 50%;
  height: 40px;
}
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
.invalid {
  color: red;
}
.difficulty {
  width: 25px;
  margin-right: 15px;
}
</style>
