import React from 'react'
import { render } from 'react-dom'
import { DogWalkCount } from './components/DogWalkCount-statelessFunction'
import { DogWalkList } from './components/DogWalkList'

window.React = React

render(
	<DogWalkCount />,

	// <DogWalkList days = {[
	// 	 {
	// 	 	destination: "Park Slope",
	// 	 	date: new Date("1/2/2017"),
	// 	 	raining: true,
	// 	 	offleash: false
	// 	 },
	// 	 {
	// 	 	destination: "Franklin Ave",
	// 	 	date: new Date("1/3/2017"),
	// 	 	raining: true,
	// 	 	offleash: false
	// 	 },
	// 	 {
	// 	 	destination: "The Boathouse",
	// 	 	date: new Date("1/8/2017"),
	// 	 	raining: false,
	// 	 	offleash: true
	// 	 }
	// ]}/>,
	document.getElementById('react-container')
)