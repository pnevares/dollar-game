import React from 'react';
import Buttons from './buttons';
import Puzzle from './puzzle';
import Stats from './stats';

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
        <Stats puzzleIndex={puzzleIndex} />
        <Buttons clickHandler={this.changePuzzle} />
      </>
    );
  }
}
