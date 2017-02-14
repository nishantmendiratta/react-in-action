var React = require('react');

var CowClickerComponent = React.createClass({
	getInitialState : function () {
		return {
			clicks : 0
		};
	},

	onCowClick : function () {
		this.setState({
			clicks : this.state.clicks + 1
		});
	},

	render : function () {
		return (
			<div> 
				Clicks : {this.state.clicks} 
				<img src="http://s3.bypaulshen.com/buildwithreact/cow.png" onClick={this.onCowClick}/>
				<p>Click the cow</p>
			</div>		
		);
	}
});

module.exports = CowClickerComponent;
