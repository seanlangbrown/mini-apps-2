import React from 'react';
import _ from 'lodash';

class GameState extends React.Component {

  constructor (props) {
    super(props)
  }


  render () {

    return (
      <p>{this.props.lives <= 0 ? "GAME OVER" : this.props.uncovered === 90 ? "YOU WON!" : "click a square"}</p>
    );
  }
}

export default GameState;