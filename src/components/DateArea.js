import moment from 'moment'
import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { monthState } from '../atoms/monthAtom'
import { unmountAtom } from '../atoms/unmountAtom'
import DateCard from './DateCard'
import EmptyDateCard from './EmptyDateCard'

function DateArea() {
	const dispMonth = useRecoilValue(monthState)
	const [arrDates, setArrDates] = useState([])
	const [arrEmpty, setArrEmpty] = useState([])

	const [visible, setVisible] = useRecoilState(unmountAtom) //for unmounting
	useEffect(() => {
		// for now restricted to yr 2022
		setVisible(true)
		let dateCards = []

		let emptyCards = []
		let shortMonth = moment(dispMonth, 'M').format('MMM')
		dateCards = []
		let daysInMonth = moment(
			'2022-' + dispMonth.toString(),
			'YYYY-MM'
		).daysInMonth()
		shortMonth = moment(dispMonth, 'M').format('MMM')
		//get empty
		let weekDay = moment('2022-' + shortMonth + '-1', 'YYYY-MMM-D').day() //== no of empty cards needed
		for (let i = 1; i <= weekDay; i++) {
			emptyCards.push(<EmptyDateCard key={i} />)
		}

		//Date cards
		for (let i = 1; i <= daysInMonth; i++) {
			dateCards.push(
				<DateCard
					date={i}
					month={shortMonth.toUpperCase()}
					key={i}
					owner={'yoyo'}
					title={'TITLE'}
				/>
			)
		}
		setArrEmpty(emptyCards)
		setArrDates(dateCards)
	}, [visible])

	return (
		<>
			{visible && (
				<div className='grid grid-cols-7 justify-center gap-8 mt-1 mb-5 overflow-hidden animate-fade-in'>
					{/*fry && <p className='bg-slate-400'> yo </p>*/}
					{arrEmpty}
					{arrDates}
					<DateCard
						date='29'
						month='FEB'
						imgurl='https://images.pexels.com/photos/3418400/pexels-photo-3418400.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
						owner='Hello.eth'
						title='Leap Day'
						description='Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.'
					/>
					<DateCard
						date='30'
						month='FEB'
						imgurl='https://images.unsplash.com/photo-1643884890748-94b4853a7723?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
						owner='Gyan.eth'
						title='What a Day'
						description='It doesn’t matter much that you can do your job well, fast, fastest. It doesn’t matter much if you’re the smartest. And it doesn’t matter much if you have the best ideas, even.'
					/>
				</div>
			)}
		</>
	)
}

export default DateArea
