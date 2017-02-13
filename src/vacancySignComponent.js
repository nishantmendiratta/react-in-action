import React from 'react';
module.exports = React.createClass({
	render: function() {
	       return (<div>{this.props.hasvacancy ? '' : 'No '}Vacancy</div>);
	}
});
