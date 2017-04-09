import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  messages: [],
  txtNumer: "",
  count: 0,
  prob: 0,
  irCount: 0,
  ahCount: 0
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
    let a = ajs ? ajs.length : 0
    let b = bkt ? bkt.length : 0
    let c = clu ? clu.length : 0
    let d = dmv ? dmv.length : 0
    let e = enw ? enw.length : 0
    let f = fox ? fox.length : 0
    let g = gpy ? gpy.length : 0
    let h = hqz ? hqz.length : 0
    let i = ir ? ir.length : 0

    var ahC = function() {
      let ahCount = a + b + c + d + e + f + g + h
      return ahCount
    }
    var irC = function() {
      let irCount = i
      return irCount
    }
    var total = function() {
      let count = a + (b * 2) + (c * 3) + (d * 4) + (e * 5) + (f * 6) + (g * 7) + (h * 8) + (i * 9)
      return count
    }
    var prob = function() {
      if (txtNumer.length === 0) {
        prob = 0
      } else {
        // a-h probability: 3/((8*3)+(2*1)) => 3/26
        // i or r probability: 2/26
        let aprob = `${((Math.pow((2/26), irC()))*(Math.pow((3/26), ahC())))*100} %`
        prob = aprob
      }
      return prob
    }
    state.txtNumer = txtNumer
    state.count = total()
    state.prob = prob()
    state.irCount = irC()
    state.ahCount = ahC()
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
