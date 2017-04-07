import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  messages: [],
  txtNumer: "",
  count: 0
}

const mutations = {
  NEW_MESSAGE(state, msg) {
    state.messages.push(msg)
  },
  txtUpdate(state, txtNumer) {
    state.txtNumer = txtNumer
  },
  txtCheck(state, txtNumer) {
    let matches = txtNumer.match(/[ajs]/gi)
    let count = matches ? matches.length : 0
    state.txtNumer = txtNumer
    state.count = count
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
