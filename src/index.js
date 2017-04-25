import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App'
import { Oops404 } from './components/Oops404'
import { HashRouter as Router, Route } from 'react-router-dom'

window.React = React

render(
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route path="/list-days" component={App} />
			<Route path="/add-day" component={App} />
		</div>
	</Router>,
	document.getElementById('react-container')
)

// <Route path="/*" component={Oops404}/>