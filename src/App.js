import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const MsgComponent = React.createClass({
	render : function() {
		return ( 
			<div> {this.props.message} </div>
		);
	}
});

class App extends Component {
  render() {
    return (
	<MsgComponent message="hello" />
    );
  }
}

export default App;
