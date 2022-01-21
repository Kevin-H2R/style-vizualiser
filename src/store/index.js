import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// #F5438F
// #F36944
// #193EAD
// #FF5001
// #EF3341
// #A8192E
// #4F85FF
// #3AD658
// #00AA83
// #0083C3
// #C80F2E
// #763EE6
// #FFD966

// #CE7BB0
// #FFA1C9
// #26865c
// #f7bc16
// #ff8500
// #1ab8e8



export default new Vuex.Store({
  state: {
    palets: [
      {2: "#223843", 5: "#EFF1F3", 4: "#DBD3D8", 3: "#D8B4A0", 1:"#D77A61", background: "#FFFFFF"},
      {5: "#0029B6", 2: "#003F88", 3: "#00509D", 1: "#FDC500", 4:"#FFD500", background: "#FFFFFF"},
      {5: "#BC4B51", 4: "#003F88", 3: "#FFD6DE", 1: "#FDC500", 2:"#F4F4F4", background: "#344955"},
      {2: "#555B6E", 3: "#89B0AE", 5: "#BEE3DB", 4: "#FAF9F9", 1:"#FFD6DA", background: "#FFFFFF"},
      {2: "#FFFFFF", 3: "#000000", 5: "#BEE3DB", 4: "#FAF9F9", 1:"#F65D5D", background: "#FFFFFF"},
    ],
    selectedPalet: null,
    styles: {}
  },
  mutations: {
    setColorFor(state, data) {
      state.styles[data.id] = data.color
    },
    setSelectedPalet(state, index) {
      if (index === undefined) {
        state.selectedPalet = null
        return
      }
      state.selectedPalet = state.palets[index]
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    palets: (state) => state.palets,
    styles: (state) => state.styles,
    selectedPalet: (state) => state.selectedPalet,
  }
})
