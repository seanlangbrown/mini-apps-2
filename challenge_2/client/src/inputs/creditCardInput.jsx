import React from 'react';
import ValidatedInput from '../units/ValidatedInput';
import validators from '../formValidators.js';


class CreditCardInput extends React.Component {
  constructor (props) {
    super(props);
  }

  //line 1, line 2, city, state, zip code) and phone number.

  render () {
    const validationWarning = "Please enter (123) 123-1234";
    return (
      <div id="phoneInput">
        <ValidatedInput name="Credit Card" value="" message="" onChange={this.props.onChangeUpdateState} validator={()=>(true)} />
        <ValidatedInput name="CVV" value="" message="" onChange={this.props.onChangeUpdateState} validator={()=>(true)} />
        <ValidatedInput name="Billing ZIP code" value="" message="" onChange={this.props.onChangeUpdateState} validator={()=>(true)} />
      </div>
    );
  }
}

export default CreditCardInput;
