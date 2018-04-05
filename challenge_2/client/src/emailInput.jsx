import React from 'react';
import ValidatedInput from './validatedInput.jsx';
import validators from './formValidators.js';

//TODO: connect Redux here

class EmailInput extends React.Component {
	
	constructor(props) {
	  super(props);
	}

	render () {
    const info = "this is so we can send you tracking updates and a receipt.  It will also be your login in the future.";
    const passwordValidationError = "invalid email"; //"passwords must contain 1 letter, one nummber, and one of: @ $ % & % *";
	  return (
        <ValidatedInput name={"Email"} value={""} message={""} onChange={this.props.onChangeUpdateState("email")} validator={validators.isValidEmail} validationWarning={passwordValidationError} info={info} />
	  );
	}
}

export default EmailInput;