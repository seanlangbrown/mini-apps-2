import React from 'react';
import TextInput from './textInput.jsx';


class Login extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div id="checkoutLogin">
        <h4>Create an Account</h4>
        <TextInput name={"First Name"} value={""} message={"this is valid."} onClick={null} />
        <TextInput name={"Last Name"} value={""} message={"this is valid."} onClick={null} />
        <TextInput name={"Email"} value={""} message={"this is valid."} onClick={null} />
        <TextInput name={"Password"} value={""} message={"this is valid."} onClick={null} />
      </div>
    );
  }
}

export default Login;