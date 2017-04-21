// const { createElement } = React
// const { Render } = ReactDOM

const style = {
	backgroundColor: 'orange',
	color: 'white',
	fontFamily: 'verdana'
}

const title = React.createElement(
	'h1',
	{id: 'title', className: 'header'},
	'Hello World'	
)

ReactDOM.render(
	title,
	document.getElementById('react-container')
)