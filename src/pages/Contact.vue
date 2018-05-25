<template>
  <div class="main">
    <div v-if="modal==='sent'">
      <h4>Message Sent</h4>
      <button v-on:click="$router.push('/')">Go Home</button>
    </div>
    <div v-else-if="modal==='error'">
      <h4>Message Failed to Send</h4>
      <button v-on:click="modal=''">Go Back</button>
    </div>
    <div v-else-if="modal==='sending'">
      <h4>Message Sending</h4>
    </div>
    <div v-else>
      <h1>Send Us A Message</h1>
      <input class="name" v-model="name" placeholder="Name" required />
      <input class="email" v-model="email" placeholder="Email" required />
      <input class="phone" v-model="phone" placeholder="Phone" />
      <textarea class="message" v-model="message" placeholder="Message" required></textarea>
      <button class="send" v-on:click="send">SEND</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'contact',
  data: function () {
    return {
      modal: '',
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  },
  methods: {
    send () {
      let vue = this
      vue.modal = 'sending'
      axios.post('https://api.endlesslovegraceandmercy.org/contact', {
        name: vue.name,
        email: vue.email,
        phone: vue.phone,
        message: vue.message
      })
        .then(response => {
          vue.modal = 'sent'
        })
        .catch(err => {
          vue.modal = 'error'
          console.log(err)
        })
    }
  }
}
</script>

<style scoped lang="less">
.main {
  position: fixed;
  padding-top: 100px;
  width: 100%;
  height: 100%;
}
input {
  border: 1px solid black;
  width: 90%;
  margin-left: 5%;
  margin-bottom: 2%;
}
textarea {
  border: 1px solid black;
  width: 90%;
  margin-left: 5%;
}
button {
  height:50px;
  color: white;
  border: none;
  box-shadow: 0px 2px 5px black ;
  background-color: #ffb759;
  text-align: center;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  font-size: 2.5em;
}
h1 {
  text-align: center;
  font-size: 2em;
}
h4 {
  text-align: center;
}
@media (min-width: 1000px) {
  .main {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    box-shadow: 0px 5px 8px black;
  }
}
</style>
