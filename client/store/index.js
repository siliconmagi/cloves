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
    let ajs = txtNumer.match(/[ajs]/gi)
    let bkt = txtNumer.match(/[bkt]/gi)
    let clu = txtNumer.match(/[clu]/gi)
    let dmv = txtNumer.match(/[dmv]/gi)
    let enw = txtNumer.match(/[enw]/gi)
    let fox = txtNumer.match(/[fox]/gi)
    let gpy = txtNumer.match(/[gpy]/gi)
    let hqz = txtNumer.match(/[hqz]/gi)
    let ir = txtNumer.match(/[ir]/gi)
    var total = function() {
      let a = ajs ? ajs.length : 0
      let b = bkt ? bkt.length * 2 : 0
      let c = clu ? clu.length * 3 : 0
      let d = dmv ? dmv.length * 4: 0
      let e = enw ? enw.length * 5 : 0
      let f = fox ? fox.length * 6: 0
      let g = gpy ? gpy.length * 7: 0
      let h = hqz ? hqz.length * 8 : 0
      let i = ir ? ir.length * 9 : 0
      let count = a + b + c + d + e + f + g + h + i
      return count
    }
    state.txtNumer = txtNumer
    state.count = total()
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
