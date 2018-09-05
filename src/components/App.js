import React from 'react';
import Premade from './Premade';
import Builder from './Builder';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      ui: 'premade',
    };

    this.changeUI = this.changeUI.bind(this);
  }

  changeUI(ui) {
    this.setState({ ui });
  }

  render() {
    const { ui } = this.state;
    return (
      <>
        {ui === 'premade' && <Premade changeUIHandler={this.changeUI} />}
        {ui === 'builder' && <Builder changeUIHandler={this.changeUI} />}
      </>
    );
  }
}
