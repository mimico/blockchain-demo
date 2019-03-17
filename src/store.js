import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// https://stackoverflow.com/a/26375459
function toHex(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    result += str.charCodeAt(i).toString(16);
  }
  return result;
}
function hashBlock(block) {
  let blWithoutHash = {
    data: block.data,
    timestamp: block.timestamp,
    previous_hash: block.previous_hash,
    nonce: block.nonce
  };
  let stringifiedBl = JSON.stringify(blWithoutHash);
  let hexifiedBl = toHex(stringifiedBl);
  return ethers.utils.keccak256("0x" + hexifiedBl);
}

export default new Vuex.Store({
  state: {
    newBlockData: "",
    blockList: [
      {
        data: "Genesis block data",
        prevHash: "0xDEADBEEF",
        hash: "0xDEADBEEF",
        timestamp: Date.now(),
        nonce: 0
      }
    ]
  },
  getters: {
    blockList: state => {
      return state.blockList
    }
  },
  mutations: {
    updateBlockData(state, payload) {
      state.blockList[payload.blockNum].data = payload.data;
      if (payload.blockNum < state.blockList.length - 1) {
        state.blockList[payload.blockNum + 1].prevHash = "0xDEADBEEF";
      }
    },
    addNewBlock(state) {
      state.blockList.push({
        data: state.newBlockData,
        prevHash: state.blockList[state.blockList.length - 1].hash,
        hash: "0xDEADBEEF",
        timestamp: Date.now(),
        nonce: 0
      });
      state.newBlockData = ""
      state.blockList[state.blockList.length - 1].hash = hashBlock(state.blockList[state.blockList.length - 1])
    },
    setNewBlockData(state, payload) {
      state.newBlockData = payload
    }
  }
})
