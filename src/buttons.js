/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import puzzles from './puzzles';

const Buttons = ({ clickHandler }) => (
  <p>
    Puzzle select:
    {puzzles.map((v, i) => (
      <button
        type="button"
        key={i}
        onClick={() => clickHandler(i)}
      >
        {i}
      </button>
    ))}
  </p>
);

Buttons.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Buttons;
