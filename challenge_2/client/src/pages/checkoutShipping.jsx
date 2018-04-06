import React from 'react';
import AddressInput from '../inputs/AddressInput.jsx';
import PhoneInput from '../inputs/PhoneInput.jsx';

class checkoutShipping extends React.Component {
  constructor () {
    super();
  }

  //line 1, line 2, city, state, zip code) and phone number.

  render () {
    return (
      <div id="checkoutShipping">
        <AddressInput />
        <PhoneInput />
      </div>
    );
  }
}

export default checkoutShipping;
