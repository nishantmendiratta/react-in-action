import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MsgComponent from './messageComponent.js';

class App extends Component {
  render() {
    return (
	<MsgComponent message="hello" />
    );
  }
}

export default App;
