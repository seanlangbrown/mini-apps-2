import React from 'react';
import ValidatedInput from '../units/ValidatedInput';
import validators from '../formValidators.js';


class PhoneInput extends React.Component {
  constructor (props) {
    super(props);
  }

  //line 1, line 2, city, state, zip code) and phone number.

  render () {
    const validationWarning = "Please enter (123) 123-1234";
    return (
      <div id="phoneInput">
         <ValidatedInput name="Phone Number" value="" message="" onChange={this.props.onChange} validator={validators.isValidPhone} validationWarning={validationWarning}/>
      </div>
    );
  }
}

export default PhoneInput;
