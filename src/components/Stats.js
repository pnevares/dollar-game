import React from 'react';
import PropTypes from 'prop-types';
import puzzles from '../puzzles';
import calculateStats from '../calculate-stats';

const Stats = ({ puzzleIndex }) => {
  const puzzle = typeof puzzles[puzzleIndex] === 'function'
    ? puzzles[puzzleIndex]()
    : puzzles[puzzleIndex];

  const { dollars, genus } = calculateStats(puzzle);

  return (
    <>
      <p>
        Dollars on this graph:
        {dollars}
      </p>
      <p>
        Genus of this graph:
        {genus}
      </p>
    </>
  );
};

Stats.propTypes = {
  puzzleIndex: PropTypes.string.isRequired,
};

export default Stats;
