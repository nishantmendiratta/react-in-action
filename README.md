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

References 
Create first react app - https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html , 
Tutorial - http://buildwithreact.com/tutorial 
