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
        {[0, 1, 2].map(i => (
          <button key={i} type="button" onClick={() => this.changePuzzle(i)}>
            Puzzle
            {i}
          </button>
        ))}
      </>
    );
  }
}
