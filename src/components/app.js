import React from 'react';
import Buttons from './buttons';
import Puzzle from './puzzle';
import Stats from './stats';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      puzzleIndex: 'puzzle1',
    };

    this.changePuzzle = this.changePuzzle.bind(this);
  }

  changePuzzle(puzzleIndex) {
    this.setState({
      puzzleIndex,
    });
  }

  render() {
    const { puzzleIndex } = this.state;
    return (
      <>
        <Puzzle puzzleIndex={puzzleIndex} />
        <Stats puzzleIndex={puzzleIndex} />
        <Buttons clickHandler={this.changePuzzle} />
      </>
    );
  }
}
