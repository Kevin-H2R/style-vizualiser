import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    palets: [
      {1: "#223843", 2: "#EFF1F3", 3: "#DBD3D8", 4: "#D8B4A0", 5:"#D77A61"},
      {1: "#0029B6", 2: "#003F88", 3: "#00509D", 4: "#FDC500", 5:"#FFD500"},
      {1: "#555B6E", 2: "#89B0AE", 3: "#BEE3DB", 4: "#FAF9F9", 5:"#FFD6DA"},
    ],
    styles: {}
  },
  mutations: {
    setColorFor(state, data) {
      state.styles[data.id] = data.color
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    palets: (state) => state.palets,
    styles: (state => state.styles)
  }
})
