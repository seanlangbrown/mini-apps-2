import React from 'react';
import TextInput from './textInput.jsx';
import InfoButton from './InfoButton';


class ValidatedInput extends React.Component {
	constructor (props) {
	  super(props);
    this.state = {
      name: this.props.name,
      message: this.props.message,
      value: this.props.value,
      valid: true
    };
    this.validate = this.validate.bind(this);
	}

  validate (e) {
    //console.log(e.target.value);
    if(!this.props.validator(e.target.value)) {
      //console.log('is valid');
      this.setState({
        value: e.target.value,
        message: this.props.validationWarning,
        valid: true
      });
      this.props.onChange(e, true);
    } else {
      this.setState({
        value: e.target.value,
        message: this.props.message,
        valid: false
      });
      this.props.onChange(e, false);
    }
  }

	render () {

	  return (
	    <div className={this.state.isValid ? "validInput" : "invalidInput"}> 
	      <TextInput name={this.state.name} value={this.state.value} message={this.state.message} onChange={this.validate} />
        {this.props.info ? <InfoButton info={this.props.info} /> : null }
	    </div>
	  );
	}
}

export default ValidatedInput



