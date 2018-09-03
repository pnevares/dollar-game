/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import puzzles from './puzzles';
import calculateStats from './calculate-stats';

const Stats = ({ puzzleIndex }) => {
  const puzzle = puzzles[puzzleIndex];

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
  puzzleIndex: PropTypes.number.isRequired,
};

export default Stats;
