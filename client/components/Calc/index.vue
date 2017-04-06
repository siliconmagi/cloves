<template>
  <div>
    <h2>Calculator</h2>
    <input :value="txtNumer" @input="txtUpdate" placeholder="Enter a word">
    <p>{{ txtNumer }}</p>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'

  export default {
    computed: {
      ...mapState({
        // Map input value to store.txtNumer
        txtNumer: state => state.txtNumer
      })
    },
    methods: {
      txtUpdate(e) {
        // On input, run mutation txtUpdate
        this.$store.commit('txtUpdate', e.target.value)
      }
    }
  }
</script>
