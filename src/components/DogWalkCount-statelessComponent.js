import React from 'react'
import PropTypes from 'prop-types'
import Terrain from 'react-icons/lib/md/terrain'
import Calendar from 'react-icons/lib/fa/calendar'

const percentToDecimal = (decimal) => {
	return ((decimal * 100) + '%')
}

const calcGoalProgress = (total, goal) => {
	return percentToDecimal(total/goal)
}

export const DogWalkCount = (props) => (
	<div className="dog-walk-count">
		<div className="total-days">
			<span>{props.total}</span>
			<span>walks</span>
		</div>
		<div className="park-days">
			<span>{props.park}</span>
			<Terrain />
			<span>walks</span>
		</div>
		<div className="street-days">
			<span>{props.street}</span>
			<span>walks</span>
		</div>
		<div className="street-days">
			<Calendar />
			<span>
				{ calcGoalProgress(props.total, props.goal) }
			</span>
		</div>
	</div>
)

DogWalkCount.defaultProps = {
	total: 50,
	park: 30,
	street: 20,
	goal: 100
}

DogWalkCount.propTypes = {
	total: PropTypes.number,
	park: PropTypes.number,
	street: PropTypes.number
}