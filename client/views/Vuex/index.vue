<template>
  <div id="app">
    <h1>Vuex test grounds</h1>
    <div class="row">
      <div class="col">
        <client clientid="Client A"></client>
      </div>
      <div class="col">
        <client clientid="Client B"></client>
      </div>
    </div>
  </div>
</template>

<script>
import Client from '../../components/Client'

export default {
  components: {
    Client
  }
}
</script>
