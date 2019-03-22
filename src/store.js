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
    prevHash: block.prevHash,
    timestamp: block.timestamp,
    nonce: block.nonce
  };
  let stringifiedBl = JSON.stringify(blWithoutHash);
  let hexifiedBl = toHex(stringifiedBl);
  // eslint-disable-next-line no-undef
  return ethers.utils.keccak256("0x" + hexifiedBl);
}

// calculates a nonce for a given block
function calculateNonce(block, difficulty) {
  let zero = "0"
  let bl = {
    data: block.data,
    timestamp: block.timestamp,
    previous_hash: block.previous_hash,
    nonce: block.nonce
  };
  // https://stackoverflow.com/a/10869248
  let clonedBl = JSON.parse(JSON.stringify(bl))
  let nonce = 0
  clonedBl["nonce"] = nonce
  let hash = hashBlock(clonedBl)
  while (!(hash.substring(2, difficulty + 2) === zero.repeat(difficulty))) {
    nonce++
    clonedBl["nonce"] = nonce
    hash = hashBlock(clonedBl)
  }
  block.hash = hash
  return nonce
}

export default new Vuex.Store({
  state: {
    newBlockData: "",
    blockList: [],
    bc_difficulty: 2
  },
  getters: {
    difficulty: state => {
      return state.bc_difficulty
    },
    blockList: state => {
      return state.blockList
    },
    block: state => index => {
      return state.blockList[index]
    },
    isBlockValid: state => index => {
      let hash = state.blockList[index].hash
      return hash.substring(2, state.bc_difficulty + 2) === "0".repeat(state.bc_difficulty)
    },
    previousHashIsValid: state => index => {
      if (index > 0 && index < state.blockList.length) {
        return (state.blockList[index].prevHash === state.blockList[index - 1].hash) &&
          (state.blockList[index].prevHash.substring(2, state.bc_difficulty + 2) === "0".repeat(state.bc_difficulty))
      }
      return true
    }
  },
  mutations: {
    updateDifficulty(state, payload) {
      state.bc_difficulty = payload;
    },
    updateBlockData(state, payload) {
      let data = payload.data
      let blockNum = payload.blockNum
      state.blockList[blockNum].data = data;
      state.blockList[blockNum].hash = hashBlock(state.blockList[blockNum]);
      blockNum++
      for (; blockNum < state.blockList.length; blockNum++) {
        state.blockList[blockNum].prevHash = state.blockList[blockNum - 1].hash
        state.blockList[blockNum].hash = hashBlock(state.blockList[blockNum])
      }
    },
    remineBlock(state, blockNum) {
      state.blockList[blockNum].nonce = calculateNonce(state.blockList[blockNum], state.bc_difficulty);
      if (blockNum >= 0 && blockNum < state.blockList.length - 1) {
        state.blockList[blockNum + 1].prevHash = state.blockList[blockNum].hash
        state.blockList[blockNum +1 ].hash = hashBlock(state.blockList[blockNum])
      }
    },
    addNewBlock(state) {
      state.blockList.push({
        data: state.newBlockData,
        prevHash: state.blockList[state.blockList.length - 1].hash,
        hash: "0xDEADBEEF",
        timestamp: new Date(),
        nonce: 0
      });
      state.newBlockData = ""
      state.blockList[state.blockList.length - 1].hash = hashBlock(state.blockList[state.blockList.length - 1])
      state.blockList[state.blockList.length - 1].nonce = calculateNonce(state.blockList[state.blockList.length - 1], state.bc_difficulty)
    },
    reset(state) {
      state.blockList = [
        {
          data: "Genesis block data",
          prevHash: "0xDEADBEEF",
          hash: "0xDEADBEEF",
          timestamp: new Date(),
          nonce: 0
        }
      ];
      state.blockList[state.blockList.length - 1].hash = hashBlock(state.blockList[state.blockList.length - 1])
      state.blockList[state.blockList.length - 1].nonce = calculateNonce(state.blockList[state.blockList.length - 1], state.bc_difficulty)
    },
    setNewBlockData(state, payload) {
      state.newBlockData = payload
    }
  }
})
