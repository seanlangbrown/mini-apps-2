import React from 'react';
import TextInput from '../units/TextInput.jsx';


class checkoutPayment extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div id="checkoutPayment" >
        <TextInput name="Credit Card" value="" message="type of card" onChange={null} />
        <TextInput name="CVV" value="" message="" onChange={null} />
        <TextInput name="Billing ZIP code" value="" message="City, State" onChange={null} />
      </div>
    );
  }
}

export default checkoutPayment;