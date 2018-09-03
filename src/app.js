import React from 'react';
import createGraph from './create-graph';
import puzzles from './puzzles';

export default class App extends React.Component {
  componentDidMount() {
    createGraph(puzzles[0]);
  }

  render() {
    return (
      <div id="container" />
    );
  }
}
