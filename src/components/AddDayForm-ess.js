import React from 'react'
import PropTypes from 'prop-types'

export class AddDayForm extends React.Component {
	constructor(props) {
		super(props)
		this.submit = this.submit.bind(this)
	}

	submit(e) {
		e.preventDefault()
		console.log('destination', this.refs.destination.value)
		console.log('destination', this.refs.date.value)
		console.log('destination', this.refs.raining.checked)
		console.log('destination', this.refs.offleash.checked)
	}

	render() {
		const { destination, date, raining, offleash } = this.props
		return (
			<form onSubmit={this.submit} className="add-day-form">

				<label htmlFor="destination">destination</label>
				<input id="destination" type="text" required defaultValue={destination} ref="destination" />

				<label htmlFor="date">date</label>
				<input id="date" type="date" required defaultValue={date} ref="date" />

				<div>
					<input id="raining" type="checkbox" defaultChecked={raining} ref="raining" />
					<label htmlFor="raining">Raining</label>
				</div>
				<div>
					<input id="offleash" type="checkbox" defaultChecked={offleash} ref="offleash" />
					<label htmlFor="offleash">offleash</label>
				</div>
				<button>Add Day</button>
			</form>
		)
	}
}

AddDayForm.defaultProps = {
	destination: "boat-house",
	date: "2017-02-13",
	raining: true,
	offleash: false
}

AddDayForm.propTypes = {
	destination: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	raining: PropTypes.bool,
	offleash: PropTypes.bool
}