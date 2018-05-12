<template>
    <div class="Navmain">
      <div class="header">
        <h1 v-on:click="navToggle(); $router.push('/')">Endless Love Grace & Mercy<br/><span>Community Shelter</span></h1>
      </div>
      <div class="buttonbox">
        <button class="About" v-on:click="navToggle(); $router.push('/About')">About</button>
        <button class="Gallery" v-on:click="navToggle(); $router.push('/Gallery')">Gallery</button>
        <button class="Contact" v-on:click="navToggle(); $router.push('/Contact')">Contact</button>
        <button class="Donate" v-on:click="navToggle(); $router.push('/Donate')">Donate</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      toggled: false,
      isToggled: false,
      first: true
    }
  },
  methods: {
    navToggle: function () {
      // Nav button functionality
      if (window.innerWidth < 700) {
        if (this.toggled === false) {
          this.toggled = true
          this.isToggled = true
          this.first = false
        } else if (this.toggled === true) {
          this.toggled = false
          this.isToggled = false
        }
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.Navmain {
  width: 100%;
  height: 150px;
  background-color: #008475;
  position: fixed;
}

.header {
  height: 60px;
  outline: 1px dashed #30b298;
  outline-offset: 35px;
}
h1 {
  text-align: center;
  font-size: 2em;
  color: white;
}
span {
  font-size: .8em;
}
.buttonbox {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
button {
  background-color: #008475;
  border: 1px solid #00664c;
  outline: 1px dashed #30b298;
  outline-offset: -4px;
  height: 40px;
  margin-top: 40px;
  padding-top: 5px;
  color: white;
  font-family: 'Open Sans', sans-serif;
  -webkit-animation-duration: .25s;
  animation-duration: .25s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
button:hover {
  animation-name: bounce;
  -moz-animation-name: bounce;
}

@keyframes bounce {
  0%, 100% {
      -webkit-transform: translateY(0);
      -ms-transform:     translateY(0);
      transform:         translateY(0)
    }

    100% {
      -webkit-transform: translateY(-5px);
      -ms-transform:     translateY(-5px);
      transform:         translateY(-5px)
    }
  }
  @media only screen and (min-width:1000px) {
    button {
      font-size: 1.5em;
    }
    h1 {
      font-size: 2em;
    }
  }
</style>
