import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { monthState } from '../atoms/monthAtom'
import moment from 'moment'
import { unmountAtom } from '../atoms/unmountAtom'

function CalHead() {
	const [dispMonth, setDispMonth] = useRecoilState(monthState)
	const [visible, setVisible] = useRecoilState(unmountAtom)
	const [monthHeader, setMonthHeader] = useState(
		moment(dispMonth, 'M').format('MMMM')
	)

	useEffect(() => {
		setMonthHeader(moment(dispMonth, 'M').format('MMMM'))
		setVisible(false)
	}, [dispMonth])

	return (
		<div className='bg-black py-3 rounded-md'>
			{/**Month + buttons */}
			<div className='p-5 flex justify-center mb-3'>
				{/** Month */}
				<div className='text-5xl text-white flex items-center space-x-6'>
					<div
						className='btn text-sm py-1 bg-black text-white p-0 pb-3'
						onClick={() => {
							setDispMonth(dispMonth - 1)
						}}
					>
						{dispMonth < 2 ? '' : '<------'}
					</div>
					<span className='font-serif w-96 text-center flex justify-center'>
						{monthHeader} &nbsp; 2022
					</span>
					<div
						className='btn text-sm py-1 bg-black text-white p-0 pb-3'
						onClick={() => setDispMonth(dispMonth + 1)}
					>
						{dispMonth > 11 ? '' : '------>'}
					</div>
				</div>
			</div>
			{/**weekdays */}
			<div className='grid grid-cols-7 text-slate-400 p-2 text-center gap-x-12'>
				<p>SUN</p>
				<p>MON</p>
				<p>TUE</p>
				<p>WED</p>
				<p>THU</p>
				<p>FRI</p>
				<p>SAT</p>
			</div>
		</div>
	)
}

export default CalHead
