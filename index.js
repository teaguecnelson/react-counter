const { createElement } = React
const { Render } = ReactDOM

const style = {
	backgroundColor: 'orange',
	color: 'white',
	fontFamily: 'verdana'
}

const title = createElement(
	'h1',
	{id: 'title', className: 'header', style: style},
	'Hello World Yp'	
)

render(
	title,
	document.getElementById('react-container')
)