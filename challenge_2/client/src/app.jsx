import React from 'react';
import CheckoutButton from './checkoutButton.jsx';
import Login from './login.jsx';
import CheckoutShipping from './checkoutShipping.jsx';
import CheckoutPayment from './checkoutPayment.jsx';



class App extends React.Component {
  constructor () {
    super();
    this.logClicked = this.logClicked.bind(this);
  }

  logClicked (e) {
    console.log('clicked', e);
  }


  render () {
    return (
      <div id="checkoutContainer">
        <CheckoutButton beginCheckout={this.logClicked} />
        <Login />
        <CheckoutShipping />
        <CheckoutPayment />
      </div>
    );
  }
}

export default App;
