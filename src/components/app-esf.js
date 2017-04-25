import React from 'react'
import { DogWalkCount } from './DogWalkCount-createClass'
import { DogWalkList } from './DogWalkList'

export const App = React.createClass({
	getInitialState() {
		return {
			allWalkDays: [
				{
					destination: "Park Slope",
					date: new Date("1/2/2017"),
					raining: true,
					offleash: false
				},
				{
					destination: "Franklin Ave",
					date: new Date("1/3/2017"),
					raining: true,
					offleash: false
				},
				{
					destination: "The Boathouse",
					date: new Date("1/8/2017"),
					raining: false,
					offleash: true
				}
			]
		}
	},
	countDays(filter) {
		return this.state.allWalkDays.filter(function(day) {
			if(filter) {
				return day[filter]
			} else {
				return day
			}
		}).length
	},
	render() {
		return (
			<div className="app">
				<DogWalkList days={this.state.allWalkDays} />
				<DogWalkCount total={this.countDays()}
							  raining={this.countDays("raining")}
							  offleash={this.countDays("offleash")} />
			</div>
		)
	}
})