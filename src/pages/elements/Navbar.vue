<template>
    <div class="Navmain">
        <button class="Contact" v-on:click="navToggle(); $router.push('/Contact')">CONTACT</button>
        <div class="logo" v-on:click="navToggle(); $router.push('/')"></div>
        <button class="Donate" v-on:click="navToggle(); $router.push('/Donate')">DONATE</button>
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
  height: 90px;
  background-color: #008490;
  position: fixed;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  box-shadow: 1px 2px 5px black;
}

.logo {
  background-image: url('../../assets/logo.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 90%;
  grid-column: 2;
}
button {
  border: none;
  background-color: transparent;
  height: 100px;
  color: white;
  font-family: Times;
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
.Contact {
  grid-column: 1;
}
.Donate {
  grid-column: 3;
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
