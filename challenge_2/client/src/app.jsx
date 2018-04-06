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
      phone: null,
      creditCard: null,
      cvv: null,
      creditCardZip: null
    };
    this.logClicked = this.logClicked.bind(this);
    this.createUser = this.createUser.bind(this);
    this.setShippingAddress = this.setShippingAddress.bind(this);
    this.acceptPayment = this.acceptPayment.bind(this);
    this.onChangeUpdateState = this.onChangeUpdateState.bind(this);
  }

  logClicked (e) {
    console.log('clicked', e);
  }

  updateState (key, value) {
    let newState = {}
    newState[key] = value;
    this.setState(newState);
  }

  onChangeUpdateState (key) {
    return (e) => {
      console.log(e.target.value);
      this.updateState(key, e.target.value);
    };
  }

  createUser (first, last, email, password) {
    if (!(first && last && email && password)) {
      return
    }
    this.setState({
      first: first,
      last: last,
      email: email,
      password: password
    });
    //route to next page
  }

  setShippingAddress (line1, line2, city, state, zip, phone) {
    this.setState({
      addressOne: line1,
      addressTwo: line2,
      city: city,
      state: state,
      zip: zip,
      phone: phone
    });
  }

  acceptPayment () {
    if (!(this.state.creditCard && this.state.cvv && this.state.creditCardZip)) {
      console.log('validation error');
      return;
    }
    //navigate to next page
  }





  render () {
    return (
      <div id="checkoutContainer">
        <CheckoutButton beginCheckout={this.logClicked} />
        <Login createUser={this.createUser} />
        <CheckoutShipping setShippingAddress={this.setShippingAddress} />
        <CheckoutPayment submitPage={this.acceptPayment} onChangeUpdateState={this.onChangeUpdateState} creditCard={this.state.creditCard} cvv={this.state.cvv} creditCardZip={this.state.creditCardZip} />
      </div>
    );
  }
}

export default App;
