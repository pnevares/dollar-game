import React from 'react';
import PropTypes from 'prop-types';
import createGraph from './create-graph';
import puzzles from './puzzles';

export default class Puzzle extends React.Component {
  componentDidMount() {
    const { puzzleIndex } = this.props;
    createGraph(puzzles[puzzleIndex]);
  }

  render() {
    return (
      <div id="container" />
    );
  }
}

Puzzle.propTypes = {
  puzzleIndex: PropTypes.number.isRequired,
};
