<template>
    <div>
        <h1>Home</h1>
        <p>Welcome to Nightshell.com, the portfolio site and blog for web developer <a href=https://github.com/siliconmagi>Silicon Magi</a>.  I am a professional web developer working in the Greater Seattle area of Washington.  My interests include web development, community involvment, writing and martial arts.  Feel free to browse my <a href=https://nightshell.com/#/blog>Blog</a> or the <a href=https://nightshell.com/#/about>About</a> page for more information.</p>
        <p> Hi </p>
        <!-- <input :value="message" @input="updateMessage"> -->
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
  import {
    mapState,
    mapActions
  } from 'vuex'

  export default {
    name: 'Dashboard',
    components: {
      //     Counter
    },
    data() {
      return {
        msg: ''
      }
    },
    props: ['clientid'],
    computed: {
      ...mapState({
        messages: state => state.messages
      })
    },
    methods: {
      trySendMessage() {
        this.newMessage({
          text: this.msg,
          sender: this.clientid
        })
        this.resetMessage()
      },
      resetMessage() {
        this.msg = ''
      },
      ...mapActions(['newMessage'])
    }
  }
</script>
