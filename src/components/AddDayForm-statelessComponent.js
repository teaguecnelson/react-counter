import React from 'react'
import PropTypes from 'prop-types'

export const AddDayForm = ({ destination, date, raining, offleash, onNewDay }) => {

	let _destination, _date, _raining, _offleash

	const submit = (e) => {
		e.preventDefault()
		onNewDay({
			destination: _destination.value,
			date: _date.value,
			raining: _raining.checked,
			offleash: _offleash.checked
		})
		_destination.value = ''
		_date.value = ''
		_raining.checked= false
		_offleash.checked= false
	}

	return (
		<form onSubmit={submit} className="add-day-form">

			<label htmlFor="destination">destination</label>
			<input id="destination" type="text" required defaultValue={destination} ref={input => _destination = input} />

			<label htmlFor="date">date</label>
			<input id="date" type="date" required defaultValue={date} ref={input => _date = input} />

			<div>
				<input id="raining" type="checkbox" defaultChecked={raining} ref={input => _raining = input} />
				<label htmlFor="raining">Raining</label>
			</div>
			<div>
				<input id="offleash" type="checkbox" defaultChecked={offleash} ref={input => _offleash = input} />
				<label htmlFor="offleash">offleash</label>
			</div>
			<button>Add Day</button>
		</form>
	)
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