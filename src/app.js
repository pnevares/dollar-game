import React from 'react';
import Puzzle from './puzzle';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      puzzleIndex: 0,
    };

    this.changePuzzle = this.changePuzzle.bind(this);
  }

  changePuzzle(index) {
    this.setState({
      puzzleIndex: index,
    });
  }

  render() {
    const { puzzleIndex } = this.state;
    return (
      <>
        <Puzzle puzzleIndex={puzzleIndex} />
        <button type="button" onClick={() => this.changePuzzle(0)}>Puzzle 1</button>
        <button type="button" onClick={() => this.changePuzzle(1)}>Puzzle 2</button>
        <button type="button" onClick={() => this.changePuzzle(2)}>Puzzle 3</button>
      </>
    );
  }
}
