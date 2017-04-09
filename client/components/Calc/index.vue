<template>
  <div>
    <h2>Pythagorean Numerology Calculator</h2>
    <input :value="txtNumer" @input="txtUpdate" placeholder="Enter a word">
    <h3>{{ count }}</h3>
    <h3>{{ prob }}</h3>
    <h3>{{ ahCount }}</h3>
    <h3>{{ irCount }}</h3>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'

  export default {
    computed: {
      ...mapState({
        // Grab store state and assign it to variables 
        txtNumer: state => state.txtNumer,
        count: state => state.count,
        prob: state => state.prob,
        ahCount: state => state.ahCount,
        irCount: state => state.irCount
      })
    },
    methods: {
      txtUpdate(e) {
        // On input, run mutation txtUpdate
        this.$store.commit('txtCheck', e.target.value)
      }
    }
  }
</script>
