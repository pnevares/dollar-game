import React from 'react';
import createGraph from './create-graph';
import puzzles from './puzzles';
import Puzzle from './puzzle';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      puzzleIndex: 0,
    };

    this.changePuzzle = this.changePuzzle.bind(this);
  }

  componentDidMount() {
    createGraph(puzzles[0]);
  }

  changePuzzle(index) {
    this.setState({
      puzzleIndex: index,
    });
  }

  render() {
    const { puzzleIndex } = this.state;
    return (
      <Puzzle puzzleIndex={puzzleIndex} />
    );
  }
}
