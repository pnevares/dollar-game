/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import puzzles from './puzzles';

const Buttons = ({ clickHandler }) => (
  <>
    Puzzles:
    {puzzles.map((v, i) => (
      <button
        type="button"
        key={i}
        onClick={() => clickHandler(i)}
      >
        {i}
      </button>
    ))}
  </>
);

Buttons.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Buttons;
