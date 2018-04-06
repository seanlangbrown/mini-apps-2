import React from 'react';
import _ from 'lodash';
import Cell from './cell';
import './board.css';

class Board extends React.Component {

  constructor (props) {
    super(props)
  }


  render () {

    const boardrow = (row, rownum) => {
      return _.map(row, (square, colnum) => {
        return (
          <div className="boardrow">
            <Cell state={square} row={rownum} column={colnum} checkCell={this.props.checkCell} />
          </div>
        );
      });
    };

    return (
      <div className="board" >
        {_.map(this.props.board, (row, rownum) => (boardrow(row, rownum)))}
      </div>
    );
  }
}

export default Board;