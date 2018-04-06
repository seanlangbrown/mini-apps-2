import React from 'react';
import _ from 'lodash';
import './cell.css';

class Cell extends React.Component {

  constructor (props) {
    super(props)
    this.selectCell = this.selectCell.bind(this);
    //console.log(this.props);
  }

  selectCell(e) {
    this.props.checkCell(this.props.row, this.props.column);
    //alert('clicked', this.props.row, this.props.column);
  }

  render () {

    return (
      <div className="cell" onClick={this.selectCell} >
        {this.props.state >= 0 ? this.props.state : this.props.state === 'X' ? this.props.state : null}
      </div>
    );
  }
}

export default Cell;