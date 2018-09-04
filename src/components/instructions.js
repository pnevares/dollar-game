import React from 'react';

const Stats = () => (
  <>
    <p>Each node has a dollar amount next to it. You win when everyone is out of debt.</p>
    <p>Click a node to distribute $1 to each connected neighbor.</p>
    <p>
      <em>Shift</em>
      -Click a node to take $1 from each connected neighbor.
    </p>
  </>
);

export default Stats;
