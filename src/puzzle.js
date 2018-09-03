import React from 'react';
import PropTypes from 'prop-types';
import createGraph from './create-graph';
import puzzles from './puzzles';

export default class Puzzle extends React.Component {
  componentDidMount() {
    const { puzzleIndex } = this.props;
    this.graph = createGraph(puzzles[puzzleIndex]);
  }

  componentDidUpdate(prevProps) {
    const { puzzleIndex } = this.props;
    if (puzzleIndex !== prevProps.puzzleIndex) {
      this.graph.graph.destroy();
      this.graph = createGraph(puzzles[puzzleIndex]);
    }
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
