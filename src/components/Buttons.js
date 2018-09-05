import React from 'react';
import PropTypes from 'prop-types';
import puzzles from '../puzzles';

const Buttons = ({ clickHandler, changeUIHandler }) => (
  <>
    <p>
      <button
        type="button"
        key="build-your-own"
        onClick={() => changeUIHandler('builder')}
      >
        build-your-own
      </button>
    </p>
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
  </>
);

Buttons.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  changeUIHandler: PropTypes.func.isRequired,
};

export default Buttons;
