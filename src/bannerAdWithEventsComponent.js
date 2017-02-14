var React = require('react');

module.exports = React.createClass({
	onBannerAdClick : function (evt) {
		// codez to make the moneys
		alert("Hi from Banner Ad");    
	},
	render : function () {
		return (
			// Render the div with an onClick prop (value is a function)	
			<div onClick={this.onBannerAdClick}>
				Click Me!
			</div>
		);
	}

});
