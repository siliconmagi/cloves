<template>
  <div>
    <h2>Calculator</h2>
    <input :value="txtNumer" @input="txtUpdate" placeholder="Enter a word">
    <p>{{ txtNumer }}</p>
    <p>{{ count }}</p>
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
        count: state => state.count
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
