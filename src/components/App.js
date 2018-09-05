import React from 'react';
import Buttons from './Buttons';
import Instructions from './Instructions';
import Puzzle from './Puzzle';
import Stats from './Stats';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      puzzleIndex: 'numberphile1',
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
        <Instructions />
        <Puzzle puzzleIndex={puzzleIndex} />
        <Stats puzzleIndex={puzzleIndex} />
        <Buttons clickHandler={this.changePuzzle} />
      </>
    );
  }
}
