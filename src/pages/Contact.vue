<template>
  <div class="main">
    <h1>Send Us A Message</h1>
    <input class="name" placeholder="Name" required>
    <input class="email" placeholder="Email" required>
    <input class="phone" placeholder="Phone">
    <textarea class="message" placeholder="Message" required></textarea>
    <button class="send">SEND</button>
  </div>
</template>

<script>
export default {
  name: 'contact'
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
@media (min-width: 1000px) {
  .main {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    box-shadow: 0px 5px 8px black;
  }
}
</style>
