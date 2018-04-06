import React from 'react';
import AddressInput from '../inputs/AddressInput.jsx';
import PhoneInput from '../inputs/PhoneInput.jsx';

class checkoutShipping extends React.Component {
  constructor () {
    super();
    this.state = {
      addressOne: null,
      addressTwo: null,
      city: null,
      state: null,
      zip: null
    };
    this.updateState = this.updateState.bind(this);
    this.submitPage = this.submitPage.bind(this);
    this.onChangeUpdateState = this.onChangeUpdateState.bind(this);
  }

  updateState (key, value) {
    let newState = {}
    newState[key] = value;
    this.setState(newState);
  }

  onChangeUpdateState (key) {
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
    this.props.setShippingAddress(this.state.addressOne, this.state.addressTwo, this.state.city, this.state.state, this.state.zip, this.state.phone);
  }

  render () {
    return (
      <div id="checkoutShipping">
        <AddressInput onChangeUpdateState={this.onChangeUpdateState} />
        <PhoneInput onChangeUpdateState={this.onChangeUpdateState}/>
        <button onClick={this.submitPage} >next</button>
      </div>
    );
  }
}

export default checkoutShipping;
