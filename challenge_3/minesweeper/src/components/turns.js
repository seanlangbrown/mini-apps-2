import React from 'react';
import _ from 'lodash';

class Turns extends React.Component {

  constructor (props) {
    super(props);
  }


  render () {
    return (
      <div className="Turns">
       <p>{`Lives: ${this.props.lives} Bombs: ${this.props.bombs}  Turns taken ${this.props.turns}`}</p>
      </div>
    );
  }
}

export default Turns;