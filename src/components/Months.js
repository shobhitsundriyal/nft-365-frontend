import React from 'react'
import MonthsCard from './MonthsCard'
import moment from 'moment'

function Months() {
	const allMonths = moment.months()
	let monthCardsArr = []
	for (let i = 0; i < 12; i++) {
		monthCardsArr.push(<MonthsCard month={allMonths[i]} i={i} key={i} />)
	}
	return (
		<div className='text-white my-12 grid lg:grid-cols-4 gap-y-10 gap-x-20 md:grid-cols-2 mx-auto'>
			{monthCardsArr}
		</div>
	)
}

export default Months
