import React from 'react';
import TextInput from '../units/TextInput.jsx';
import CreditCardInput from '../inputs/creditCardInput.jsx';


class checkoutPayment extends React.Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div id="checkoutPayment" >
        <CreditCardInput onChangeUpdateState={this.props.onChangeUpdateState} creditCard={this.props.creditCard} cvv={this.props.cvv} creditCardZip={this.props.creditCardZip} />
        <button onClick={this.props.submitPage} >next</button>
      </div>
    );
  }
}

export default checkoutPayment;