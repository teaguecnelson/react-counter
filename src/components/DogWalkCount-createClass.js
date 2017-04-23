import React from 'react'

export const DogWalkCount = React.createClass ({
	propTypes: {
		total: React.PropTypes.number,
		park: React.PropTypes.number,
		street: React.PropTypes.number,
	},
	getDefaultProps() {
		return {
			total: 50,
			park: 30,
			street: 20,
			goal: 100
		}
	},
	percentToDecimal(decimal) {
		return ((decimal * 100) + '%')
	},
	calcGoalProgress(total, goal) {
		return this.percentToDecimal(total/goal)
	},
	render () {
		return (
			<div className="dog-walk-count">
				<div className="total-days">
					<span>{this.props.total}</span>
					<span>walks</span>
				</div>
				<div className="park-days">
					<span>{this.props.park}</span>
					<span>walks</span>
				</div>
				<div className="street-days">
					<span>{this.props.street}</span>
					<span>walks</span>
				</div>
				<div className="street-days">
					<span>
						{ this.calcGoalProgress(this.props.total, this.props.goal) }
					</span>
				</div>
			</div>
		)
	}
})