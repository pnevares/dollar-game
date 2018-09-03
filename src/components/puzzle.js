import React from 'react';
import PropTypes from 'prop-types';
import createGraph from '../create-graph';
import puzzles from '../puzzles';

export default class Puzzle extends React.Component {
  componentDidMount() {
    this.createGraph();
  }

  componentDidUpdate(prevProps) {
    const { puzzleIndex } = this.props;
    if (puzzleIndex !== prevProps.puzzleIndex || typeof puzzles[puzzleIndex] === 'function') {
      this.graph.graph.destroy();
      this.createGraph();
    }
  }

  createGraph() {
    const { puzzleIndex } = this.props;

    const puzzle = typeof puzzles[puzzleIndex] === 'function'
      ? puzzles[puzzleIndex]()
      : puzzles[puzzleIndex];

    this.graph = createGraph(puzzle);
  }

  render() {
    const { puzzleIndex } = this.props;
    return (
      <div id="container" puzzle={puzzleIndex} />
    );
  }
}

Puzzle.propTypes = {
  puzzleIndex: PropTypes.number.isRequired,
};
