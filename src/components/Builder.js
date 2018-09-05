import React from 'react';
import createGraph from '../create-graph';

export default class Builder extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    this.buildGraph();
  }

  buildGraph() {
    this.graph = createGraph();
  }

  render() {
    return (
      <>
        <p>BUILDER MODE</p>
        <p>Click to place a node. Shift-Click a node to remove it.</p>
        <p>
          Click two nodes in sequence to connect them.
          Click on a connection to remove it.
        </p>
        <p>Toggle to dollar mode to set amounts. Click to decrease, Shift-Click to increase.</p>
        <div id="container" />
        <p><textarea defaultValue="abc" /></p>
      </>
    );
  }
}
