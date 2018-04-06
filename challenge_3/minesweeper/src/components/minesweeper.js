import React from 'react';
import GameState from './gameState';
import Board from './board';
import Turns from './turns';
import _ from 'lodash';

class Minesweeper extends React.Component {

  constructor () {
    super()
    this.state = {
      board: [
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '']
      ],
      bombs: 10,
      turn: 0,
      lives: 3,
      uncovered: 0
    };
    this.checkCell = this.checkCell.bind(this);
    this.uncoverCell = this.uncoverCell.bind(this);
    this.decrementState = this.decrementState.bind(this);
    this.createGame = this.createGame.bind(this);
  }

  checkCell (row, col) {
    let turn = this.state.turn + 1;
    let lives = this.state.lives;
    if (this.state.board[row][col] === 'b') {
      this.updateState(row, col, 'X');
      alert('BOMB!!!');
      lives--;
    }
    //uncover cell and surrounding cells
    this.uncoverCell(row, col);
    //update turn and lives count
    this.setState({
      turn: turn,
      lives: lives
    });
  }

  uncoverCell (row, col) {
    if (row < 0 || row > 9 || col < 0 || col > 9) {
      return;
    }
    //uncover square if possible
    if (this.state.board[row][col] === '') {
      this.updateState(row, col, 0);
      let uncovered = this.state.uncovered + 1;
      this.setState({
        uncovered: uncovered
      });
      //check surrounding squares
      //this.uncoverCell(row - 1, col - 1);
      this.uncoverCell(row - 1, col);
      //this.uncoverCell(row - 1, col + 1);
      this.uncoverCell(row + 1, col);
      this.uncoverCell(row, col - 1);
      this.uncoverCell(row, col + 1);
      //this.uncoverCell(row + 1, col + 1);
      //this.uncoverCell(row + 1, col - 1);
    } else if (this.state.board[row][col] < 0) {
      this.updateState(row, col, this.state.board[row][col] * -1);
    }
  }

  updateState (row, col, val) {
    let board = this.state.board;
    board[row][col] = val;
    //console.log(board);
    this.setState({
      board: board
    });
  }

  decrementState(row, col, board) {
    if (row < 0 || row > 9 || col < 0 || col > 9) {
      return
    }
    let val = board ? board[row][col] : this.state.board[row][col];
    if (val === 'b') {
      return
    }
    if (val === '') {
      val = -1;
    } else {
      val--;
    }
    if (val === 0) {
      val = '';
    }
    if (board) {
      board[row][col] = val;
    } else {
      this.updateState(row, col, val);
    }
  }

  createGame () {
    let board = [
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', '', '']
      ];
    for(var i = 0; i < this.state.bombs; i++) {
      //random col
      let row = null;
      let col = null;
      do {
        col = Math.floor(Math.random() * 10);
        row = Math.floor(Math.random() * 10);
        //console.log(row, col);
      } while (board[row][col] === 'b');
      board[row][col] = 'b';
      //random row
      //for surrounding squares, decrement counter
      this.decrementState(row + 1, col, board);
      this.decrementState(row - 1, col, board);
      this.decrementState(row + 1, col + 1, board);
      this.decrementState(row -1, col - 1, board);
      this.decrementState(row, col - 1, board);
      this.decrementState(row, col + 1, board);
    }
    this.setState({
      board: board,
      bombs: 10,
      turn: 0,
      lives: 3,
      uncovered: 0
    });
  }

  componentDidMount () {
    this.createGame();
  }

  render () {

    return (
      <div className="minesweeper">
        <GameState lives={this.state.lives} uncovered={this.props.uncovered} />
        <Board board={this.state.board} checkCell={this.checkCell} />
        <Turns turns={this.state.turn} lives={this.state.lives} bombs={this.state.bombs}/>
        <button onClick={this.createGame}>Restart</button>
      </div>
    );
  }
}

export default Minesweeper;