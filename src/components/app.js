import React from 'react'
import { DogWalkList } from './DogWalkList'
import { DogWalkCount } from './DogWalkCount-statelessComponent'
import { AddDayForm } from './AddDayForm-statelessComponent'
import { Menu } from './Menu'

export class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			allWalkDays: [
			{
				destination: "Park Slope",
				date: "2017-04-07",
				raining: true,
				offleash: false
			}
		]
		}
		this.addDay = this.addDay.bind(this)
		console.log(this.state)
	}
	addDay(newDay) {
		this.setState({
			allWalkDays: [
				...this.state.allWalkDays,
				newDay
			]
		}, function () {
			console.log(this.state)
		})
	}
	countDays(filter) {
		return this.state.allWalkDays.filter(
			(day) => (filter) ? day[filter] : day
		).length
	}
	render() {
		//changing paths resets the state?
		return (
			<div className="app">
			<Menu />
			{(this.props.location.pathname === "/") ? 
				<DogWalkCount total={this.countDays()}
							  raining={this.countDays("raining")}
							  offleash={this.countDays("offleash")} />
			: (this.props.location.pathname === "/add-day") ?
				<AddDayForm onNewDay={this.addDay} />
			:
				<DogWalkList days={this.state.allWalkDays} />
			}
			</div>
		)
	}
}





