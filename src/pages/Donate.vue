<template>
  <div class="main">
    <div class="form-row" v-if="modal!=='thanks' && modal!=='processing'">
      <button class="back" v-on:click="$router.push('/')">Go Back</button>
      <h2 v-if="modal==='donate'">Donation Amount</h2>
      <input class="ammount" v-if="modal==='donate'" v-model="ammount" placeholder="$0.00"/>
      <input class="email" v-if="modal==='donate'" v-model="email" placeholder="user@example.com"/>
      <div id="card-element"></div>
      <div id="card-errors" role="alert"></div>
      <button class="submit" v-on:click="submitCard" v-if="modal==='donate'">Submit Donation</button>
    </div>
    <div v-if="modal==='thanks'">
      <h1 class="thanks">Thank you for the Donation!!</h1>
      <button class="back" v-on:click="$router.push('/')">Go Back</button>
    </div>
    <div v-if="modal==='processing'">
      <h1 class="thanks">Processing your Donation</h1>
    </div>
    <div class="donate" v-if="button">
      <button v-on:click="stripeSetup(); button=false">Donate</button>
      <h1>(We are completely funded by community and corporate generosity. We are a registered non-profit corporation 501( c)3 (Pending), and all donations are completely tax-deductible.)</h1>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'donate',
  data () {
    return {
      modal: '',
      email: '',
      button: true,
      stripe: '',
      ammount: '',
      card: '',
      payment: '',
      stripeToken: '',
      error: ''
    }
  },
  methods: {
    stripeSetup () {
      let vue = this
      vue.modal = 'donate'
      vue.stripe = window.Stripe('')
      var elements = vue.stripe.elements()
      var style = {
        base: {
          color: '#32325d',
          lineHeight: '18px',
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: 'antialiased',
          fontSize: '16px',
          '::placeholder': {
            color: '#aab7c4'
          }
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a'
        }
      }
      vue.card = elements.create('card', {style: style})
      vue.card.mount('#card-element')
      vue.card.addEventListener('change', function (event) {
        var displayError = document.getElementById('card-errors')
        if (event.error) {
          displayError.textContent = event.error.message
        } else {
          displayError.textContent = ''
        }
      })
    },
    submitCard () {
      let vue = this
      vue.modal = 'processing'
      vue.stripe.createToken(vue.card).then(function (result) {
        if (result.error) {
          const errorElement = document.getElementById('card-errors')
          errorElement.textContent = result.error.message
          console.log(result.error)
        } else {
          vue.stripeTokenHandler(result.token.id)
        }
      })
    },
    stripeTokenHandler (token) {
      let vue = this
      vue.stripeToken = token
      vue.ammount = parseInt(vue.ammount)
      vue.ammount = 100 * vue.ammount
      vue.payment = true
      axios.post('https://api.endlesslovegraceandmercy.org/donate', {
        ammount: vue.ammount,
        stripeToken: vue.stripeToken,
        recipients: vue.email
      })
        .then(function () {
          vue.error = false
          vue.payment = true
          vue.modal = 'thanks'
        })
        .catch(function (error) {
          console.log(error)
          vue.error = true
        })
    }
  }
}
</script>

<style scoped lang="less">
@red: #c90c2e;
@grey: #323d38;
  .main {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(8, 4em);
    position: fixed;
    margin-top: 100px;
  }
  h1 {
    text-align: center;
    font-size: 1.5em;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    color: #008490;
  }
  h2 {
    color: #008490;
  }
  .donate {
    grid-row: 2;
    grid-column-start: 1;
    grid-column-end: 4;
  }
  .donate button {
    color: white;
    border: none;
    box-shadow: 0px 2px 5px black ;
    background-color: #ffb759;
    text-align: center;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 2.5em;
    line-height: 1.6em;
    grid-column-start: 1;
    grid-column-end: 4;
  }
  .StripeElement {
    background-color: white;
    height: 40px;
    width: 90%;
    margin-left: 5%;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 10px 12px;
    border: 1px solid @grey;
    box-shadow: 0 1px 3px 0 #e6ebf1;
    -webkit-transition: box-shadow 150ms ease;
    transition: box-shadow 150ms ease;
  }

  .StripeElement--focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
  }

  .StripeElement--invalid {
    border-color: @grey;
  }

  .StripeElement--webkit-autofill {
    background-color: #fefde5 !important;
  }
  .form-row {
    text-align: center;
    width: 100%;
    line-height: 2em;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 8;
  }
  .back {
    color: white;
    border: none;
    box-shadow: 0px 2px 5px black ;
    background-color: #c22227;
    font-size: 2em;
    text-align: center;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    grid-column-start: 1;
    grid-column-end: 4;
  }
  input {
    border: 1px solid black;
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
  }
  .submit {
    color: white;
    border: none;
    box-shadow: 0px 2px 5px black ;
    background-color: #008490;
    width: 90%;
  }
  .thanks {
    width: 100%;
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
