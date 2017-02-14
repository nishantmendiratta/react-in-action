//Edit this board picker so the button actually works. Right now, the first board is always selected (var isSelected = ii === 0).

var React = require('react');

var Board = React.createClass({
	render : function () {
		var className = "board";
		if (this.props.selected) { className += " selected" }
		return (
			<div className={className}>
				{this.props.index+1}
			</div>
		);
	}
});

var BoardSwitcherComponent = React.createClass({
	getInitialState : function () {
	
		return {selectedIndex : 0}
	},
	
	onToggleClick : function () {
		this.setState({
			selectedIndex : (this.state.selectedIndex + 1)  % this.props.numBoards	
		})
		
	},
	render : function (){
		var boards = []
		for (var ii=0; ii < this.props.numBoards; ii++) {
			var isSelected = ii === this.state.selectedIndex;
			boards.push(
				<Board index={ii} selected={isSelected} key={ii} />
			);
		}
		return (
			<div>
				<div className="boards">{boards}</div>
				<button onClick={this.onToggleClick}>Toggle</button>
			</div>
		);
	}

});

module.exports = BoardSwitcherComponent;
