import React from 'react';
import TextInput from './textInput.jsx';
import validators from './formValidators.js';


class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      first: null,
      last: null,
      email: null,
      password: null,
    };

    this.updateState = this.updateState.bind(this);
    this.submitPage = this.submitPage.bind(this);
    this.onChangeUpdateState = this.onChangeUpdateState.bind(this);
    this.validEmailMessage = this.validEmailMessage.bind(this);
  }

  updateState(key, value) {
    let newState = {}
    newState[key] = value;
    this.setState(newState);
  }

  onChangeUpdateState(key) {
    return (e) => {
      console.log(e.target.value);
      this.updateState(key, e.target.value);
    };
  }

  submitPage () {
    for (var key in this.state) {
      if (this.state[key] === null) {
        console.log('Validation error!');
        return null;
      }
    }
    this.props.createUser(this.state.first, this.state.last, this.state.email, this.state.password);
  }

  validEmailMessage () {
    if (this.state.email === null || validators.isValidEmail(this.state.email)) {
      return null;
    } else {
      return "invalid email"
    }
  };

  validPasswordMessage() {
    if (this.state.password === null || validators.isValidPassword(this.state.password)) {
      return null;
    } else {
      return "passwords must contain 1 letter, one nummber, and one of: @ $ % & % *";
    }
  }

  render () {
    return (
      <div id="checkoutLogin">
        <h4>Create an Account</h4>
        <TextInput name={"First Name"} value={""} message={"this is valid."} onChange={this.onChangeUpdateState("first")} />
        <TextInput name={"Last Name"} value={""} message={"this is valid."} onChange={this.onChangeUpdateState("last")} />
        <TextInput name={"Email"} value={""} message={this.validEmailMessage()} onChange={this.onChangeUpdateState("email")} />
        <TextInput name={"Password"} value={""} message={this.validPasswordMessage()} onChange={this.onChangeUpdateState("password")} />
        <button onClick={this.submitPage} >next</button>
      </div>
    );
  }
}

export default Login;