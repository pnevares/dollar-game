import React from 'react';
import PropTypes from 'prop-types';
import puzzles from '../puzzles';

const Buttons = ({ clickHandler }) => (
  <p>
    Puzzle select:
    {Object.keys(puzzles).map(v => (
      <button
        type="button"
        key={v}
        onClick={() => clickHandler(v)}
      >
        {v}
      </button>
    ))}
  </p>
);

Buttons.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default Buttons;
