import React from 'react';
import CheckoutButton from './pages/checkoutButton.jsx';
import Login from './pages/login.jsx';
import CheckoutShipping from './pages/checkoutShipping.jsx';
import CheckoutPayment from './pages/checkoutPayment.jsx';



class App extends React.Component {
  constructor () {
    super();
    this.state = {
      first: null,
      last: null,
      email: null,
      password: null,
      addressOne: null,
      addressTwo: null,
      city: null,
      state: null,
      zip: null,
      creditCard: null,
      cvv: null,
      creditCardZip: null
    };
    this.logClicked = this.logClicked.bind(this);
    this.createUser = this.createUser.bind(this);
    this.setShippingAddress = this.setShippingAddress.bind(this);
    this.acceptPayment = this.acceptPayment.bind(this);
  }

  logClicked (e) {
    console.log('clicked', e);
  }

  createUser (first, last, email, password) {
    this.setState({
      first: first,
      last: last,
      email: email,
      password: password
    });
  }

  setShippingAddress (line1, line2, city, state, zip) {
    this.setState({
      addressOne: line1,
      addressTwo: line2,
      city: city,
      state: state,
      zip: zip
    });
  }

  acceptPayment (creditCard, cvv, creditCardZip) {
    this.setState({
      creditCard: creditCardZip,
      cvv: cvv,
      creditCardZip: creditCardZip
    });
  }

  render () {
    return (
      <div id="checkoutContainer">
        <CheckoutButton beginCheckout={this.logClicked} />
        <Login createUser={this.createUser} />
        <CheckoutShipping setShippingAddress={this.setShippingAddress} />
        <CheckoutPayment processPayment={this.acceptPayment} />
      </div>
    );
  }
}

export default App;
