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

    // regex match
    let ajs = txtNumer.match(/[ajs]/gi)
    let bkt = txtNumer.match(/[bkt]/gi)
    let clu = txtNumer.match(/[clu]/gi)
    let dmv = txtNumer.match(/[dmv]/gi)
    let enw = txtNumer.match(/[enw]/gi)
    let fox = txtNumer.match(/[fox]/gi)
    let gpy = txtNumer.match(/[gpy]/gi)
    let hqz = txtNumer.match(/[hqz]/gi)
    let ir = txtNumer.match(/[ir]/gi)

    // match count
    let a = ajs ? ajs.length : 0
    let b = bkt ? bkt.length : 0
    let c = clu ? clu.length : 0
    let d = dmv ? dmv.length : 0
    let e = enw ? enw.length : 0
    let f = fox ? fox.length : 0
    let g = gpy ? gpy.length : 0
    let h = hqz ? hqz.length : 0
    let i = ir ? ir.length : 0

    // letter values
    let bv = (b * 2)
    let cv = (c * 3)
    let dv = (d * 4)
    let ev = (e * 5)
    let fv = (f * 6)
    let gv = (g * 7)
    let hv = (h * 8)
    let iv = (i * 9)

    let add = (n) => {
      if (n <= 0) {
        return 0
      } else {
        //n = n-1
        //return `${n} + ${add(n)}` 
        return `${Math.pow(n, 0)} + ${add(n-1)}`
      }
    }
    let ahC = () => {
      let ahCount = a + b + c + d + e + f + g + h
      return ahCount
    }
    let irC = () => {
      let irCount = i
      return irCount
    }
    let total = () => {
      let count = a + bv + cv + dv + ev + fv + gv + hv + iv 
      return count
    }
    let prob = () => {
      if (txtNumer.length === 0) {
        prob = 0
      } else {
        let aprob = `${((Math.pow((2/26), irC()))*(Math.pow((3/26), ahC())))*100} %`
        prob = aprob
      }
      return prob
    }
    state.txtNumer = txtNumer
    state.count = total()
    state.prob = prob()
    state.irCount = add(a)
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
