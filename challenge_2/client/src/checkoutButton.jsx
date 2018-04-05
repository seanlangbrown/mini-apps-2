import React from 'react';


class checkoutButton extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
      <button onClick={(e) => (this.props.beginCheckout(e))}>Checkout</button>
      </div>
    );
  }
}

export default checkoutButton;



