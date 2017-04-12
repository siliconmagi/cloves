import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  messages: [],
  txtNumer: "",
  count: 0,
  prob: 0,
  irCount: 0,
  ahCount: 0,
  stringAdd: "hi"
}

const mutations = {
  txtUpdate(state, txtNumer) {
    state.txtNumer = txtNumer
  },
  txtCheck(state, txtNumer) {
    // add array
    let addArr = []
    let stringAdd = []

    // push regex match to array
    let ajs = txtNumer.match(/[ajs]/gi)
    let bkt = txtNumer.match(/[bkt]/gi)
    let clu = txtNumer.match(/[clu]/gi)
    let dmv = txtNumer.match(/[dmv]/gi)
    let enw = txtNumer.match(/[enw]/gi)
    let fox = txtNumer.match(/[fox]/gi)
    let gpy = txtNumer.match(/[gpy]/gi)
    let hqz = txtNumer.match(/[hqz]/gi)
    let ir = txtNumer.match(/[ir]/gi)

    // console.log(txtNumer.length)
    if (ajs !== null) {
      // ajs.forEach(function(item, index, array) {
      // addArr.push('1')
      // }
      for (let i = 0, len = ajs.length; i < len; i++) {
        // console.log(ajs[i])
        addArr.push('1')
      }
    }

    console.log(addArr)

    if (txtNumer.length !== '') {
      for (let i = 0, len = txtNumer.length; i < len; i++) {
        stringAdd.push("hit")
      }
    }

    console.log(stringAdd)
    state.txtNumer = txtNumer
    // state.stringAdd += "hi" 
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
