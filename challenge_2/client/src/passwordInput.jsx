import React from 'react';
import ValidatedInput from './validatedInput.jsx';
import validators from './formValidators.js';

//TODO: connect Redux here

class PasswordInput extends React.Component {
	
	constructor(props) {
	  super(props);
	}

	render () {
     const passwordValidationError = "passwords must contain 1 letter, one nummber, and one of: @ $ % & % *";
	  return (
        <ValidatedInput name={"Password"} value={""} message={""} onChange={this.props.onChangeUpdateState("password")} validator={validators.isValidPassword} validationWarning={passwordValidationError} />
	  );
	}
}

export default PasswordInput;