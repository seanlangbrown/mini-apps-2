import React from 'react';
import TextInput from '../units/TextInput.jsx';
import CreditCardInput from '../inputs/creditCardInput.jsx';


class checkoutPayment extends React.Component {
  constructor () {
    super();
    this.state = {
      creditCard: null,
      cvv: null,
      creditCardZip: null
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
    this.props.acceptPayment(this.state.creditCard, this.state.cvv, this.state.creditCardZip, this.state.password);
  }

  render () {
    return (
      <div id="checkoutPayment" >
        <CreditCardInput />
        <button onClick={this.submitPage} >next</button>
      </div>
    );
  }
}

export default checkoutPayment;