import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    count: 0,
    showModal: false,
    memoId: null,
  },
  mutations: {
    minus(state) {
      state.count--
    },
    plus(state) {
      state.count++
    },
    toogleShowModal(state) {
        state.showModal = !state.showModal
    },
    setMemoId(state) {
        state.memoId = 99
    }
  },
  actions: {
  }
})
