import React from 'react';
import TextInput from './textInput.jsx';
import NameInput from './nameInput.jsx';
import EmailInput from './emailInput.jsx';
import PasswordInput from './passwordInput.jsx';


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
      //this.updateState(key, e.target.value);
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


  render () {
    return (
      <div id="checkoutLogin">
        <h4>Create an Account</h4>
        <NameInput onChangeUpdateState={this.onChangeUpdateState} />
        <EmailInput onChangeUpdateState={this.onChangeUpdateState} />
        <PasswordInput onChangeUpdateState={this.onChangeUpdateState} />
        <button onClick={this.submitPage} >next</button>
      </div>
    );
  }
}

export default Login;