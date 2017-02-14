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

References 
Create first react app - https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html , 
Tutorial - http://buildwithreact.com/tutorial 
