import React from 'react';
import TextInput from '../units/TextInput.jsx';
import CreditCardInput from '../inputs/creditCardInput.jsx';


class checkoutPayment extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div id="checkoutPayment" >
        <CreditCardInput />
      </div>
    );
  }
}

export default checkoutPayment;