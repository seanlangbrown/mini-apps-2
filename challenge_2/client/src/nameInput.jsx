import React from 'react';
import TextInput from './textInput.jsx';
import validators from './formValidators.js';

//TODO: connect Redux here

class PasswordInput extends React.Component {
	
	constructor(props) {
	  super(props);
	}

	render () {
     const passwordValidationError = "passwords must contain 1 letter, one nummber, and one of: @ $ % & % *";
	  return (
	  	<div>
        <TextInput name={"First Name"} value={""} message={""} onChange={this.props.onChangeUpdateState("first")} />
        <TextInput name={"Last Name"} value={""} message={""} onChange={this.props.onChangeUpdateState("last")} />
      </div>  
	  );
	}
}

export default PasswordInput;