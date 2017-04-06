import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  messages: []
}

const mutations = {
  NEW_MESSAGE(state, msg) {
    state.messages.push(msg)
  }
}

const actions = {
  newMessage({
    commit
  }, msg) {
    commit('NEW_MESSAGE', msg)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
