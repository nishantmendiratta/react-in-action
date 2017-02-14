# react-in-action
React learnings

Tutorial: 
#####Introduction
Give React some personality by sprucing up this hello message.
	<code>
		ReactDOM.render(
			<div>Hello!</div>,
			document.getElementById('container')
		);
	</code>

#####JSX
JSX is a preprocessor step that adds XML syntax to JavaScript. You can definitely use React without JSX but JSX makes React a lot more elegant.
Just like XML, JSX tags have a tag name, attributes, and children. If an attribute value is enclosed in quotes, the value is a string. Otherwise, wrap the value in braces and the value is the enclosed JavaScript expression.
eg
	<code>
		React.createElement("div", { className: "red" }, "Children Text");
		
		React.createElement(MyCounter, { count: 3 + 5 });
	</code>

Why className?
Since JSX is JavaScript, identifiers such as class and for are discouraged as XML attribute names. Instead, React DOM components expect DOM property names like className and htmlFor, respectively.


#####Components
Components are the heart and soul of React.

	<code>
		// create a component named messagecomponent
		var MessageComponent = React.createClass({
			render : function () {
				return (
					<div>{this.props.message}</div>
				);
			}
		});

		// Render an instance of MessageComponent into document.body
		ReactDom.render({
			<MessageComponent message="Hello!" />,
			document.body
		});
	</code>

Create a new component class using React.createClass. Components have one requirement; they must implement render, a function that tells the component what to... render.

#####Props
Props are half of what make React components special. 
The JSX attributes you were setting earlier, like className, were props! When a component is rendered, it can access its "props" using this.props. In the code above, the Message component uses this.props.message.

	<code>
		render: function() {
		  return (
		    <div>{this.props.message}</div>
		  );
		}
	</code>

#####Exercise: Props
Create a VacancySign component that has a boolean prop hasvacancy. The component should render a div with either the text "Vacancy" or "No Vacancy" depending on the prop.

	<code>
		var VacancySignComponent = React.createClass({
			render : function () {
				return (
					<div> {this.props.hasvacancy ? '' : 'Not '} Vacancy </div> 	
				);
			};		
		});	
	</code>

#####Events
Let's dive right in. This example component renders a div that responds to click events.

	<code>
		var BannerAd = React.createClass({
			onBannerClick : function (evnt) {
				//codez to make the moneys
			},
			render : function () {
				// Render the div with an onClick prop (value is a function)
				return (
					<div onClick={this.props.onBannerClick}> Click Me!</div>
				);
			}
		});
	</code>
That's it. You add onXXX to the nodes you want. Notice how the value of the prop is a function.

React keeps track of which rendered nodes have listeners. The synthetic event system implements its own bubbling and calls the appropriate handlers.

#####Exercise: Events
This one's a little trickier but you know everything you need. Remember that you can pass functions as props.
	<code>
		var childComponent = React.createClass({
			render : function () {
				return (
					<div className="prompt">Add a click handler to this button so that when clicked, performMagic is called in the parent component.</div>

					<button onClick={this.props.onMagicClick}> Do Magic!</button>
				)
			}
		});
		
		var parentComponent = React.createClass({
			performMagic : function () {
				alert("TAADA!");
			},
			render : function () {
				return (
					<ChildComponent onMagicClick={this.performMagic} />
				);
			}			
		})
	</code>

#####State
So far, we've used React as a static rendering engine. Now, we're going to add state to make React components more dynamic.

The key difference between props and state is that state is internal and controlled by the component itself while props are external and controlled by whatever renders the component. Let's see it in practice.

Eg - Cow Clicker
	<code>
		var CowClicker = React.createClass({
			getInititalState : function () {
				return {
					clicks : 0
				}
			},
			onCowClick : function () {
				this.setState({
					clicks : this.state.clicks + 1
				});
			},
			render : function () {
				return (
					<div>
					<div>Clicks: {this.state.clicks}</div>
					<img src="http://s3.bypaulshen.com/buildwithreact/cow.png" onClick={this.onCowClick} />
					<p>Click the cow</p>
					</div>
				);			
			}
		});
	</code>

####API
#####GETINITIALSTATE
Implement the function getInitialState, which returns... the initial state of the component. This is an object map of keys to values.

	<code>
		getInitialState : function () {
			return { clicks : 0 }
		}
	</code>

#####THIS.STATE
To access a component's state, use this.state, just like how we use this.props.

#####THIS.SETSTATE
To update a component's state, call this.setState with an object map of keys to updated values. Keys that are not provided are not affected.

	<code>
		this.setState({
			// Notice how we access the current state here
			clicks : this.state.clicks + 1
		})
	</code>

When a component's state changes, render is called with the new state and the UI is updated to the new output. This is the heart of React.

#####NOTE: AUTOBINDING
You may be surprised that we don't need to pass the callback as ```this.onCowClick.bind(this)```. (If not, read this). This is because React autobinds methods on the component instance for performance reasons.

#####Exercise: State
Edit this board picker so the button actually works. Right now, the first board is always selected (var isSelected = ii === 0).

	<code>	
		var Board = React.createClass({
			render : function () {
				var className = "board";
				if ( this.props.isSelected) { className += " selected" }
				return (
					<div className={className}> {this.props.index + 1}  </div>
				)
			}
		});

		var BoardSwitcher = React.createClass({
			getInitialState : function () {
				selectedIndex : 0
			},
			onToggleClick : function () {
				this.setState({
					selectedIndex = (this.state.selectedIndex + 1)  % this.props.numBoards
				});
			},
			render : function () {
				var boards = [];
				for (var ii=0; ii<this.props.numBoards;i++) {
					var isSelected = ii === this.state.selectedIndex
					boards.push ( 
						<Board index={ii} isSelected={isSelected}  key={ii}  />
					);
				}
				return (
					<div>
						<BoardSwitcher numBoards={3} />
						<button onClick={this.onToggleClick}> Toggle </button>
					</div>
				);
			}
		});	
	</code>

Components, props, and state form the core of React. You're ready to build with React!

References 
Create first react app - https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html , 
Tutorial - http://buildwithreact.com/tutorial 
