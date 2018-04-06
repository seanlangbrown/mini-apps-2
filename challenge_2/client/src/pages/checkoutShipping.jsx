import React from 'react';
import TextInput from '../units/TextInput';


class checkoutShipping extends React.Component {
  constructor () {
    super();
  }

  //line 1, line 2, city, state, zip code) and phone number.

  render () {
    return (
      <div id="checkoutShipping">
        <TextInput name="Address line 1" value="" message="" onchange={null} />
        <TextInput name="Address line 1" value="" message="" onchange={null} />
        <TextInput name="City" value="" message="" onchange={null} />
        <TextInput name="State" value="" message="" onchange={null} />
        <TextInput name="ZIP code" value="" message="" onchange={null} />
        <TextInput name="Phone Number" value="" message="" onchange={null} />
      </div>
    );
  }
}

export default checkoutShipping;
