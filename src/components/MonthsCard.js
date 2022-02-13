import circles from '../assets/circle.png'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { monthState } from '../atoms/monthAtom'

function MonthsCard({ i, month }) {
	const [dispMonth, setDispMonth] = useRecoilState(monthState)
	let deg = i * 30
	return (
		<Link to='/select-date'>
			<div
				className='h-[22rem] w-56 border-2 cursor-pointer hover:shadow-lg hover:shadow-zinc-500 transition-all delay-100 relative'
				onClick={() => setDispMonth(i + 1)}
			>
				<span className='absolute text-xl left-2'>⁕</span>
				<span className='absolute text-xl right-2'>⁕</span>
				<div className='bg-white h-1/2 rounded-t-full flex items-center justify-center '>
					<img
						src={circles}
						className={` h-20 w-20 rounded-full`}
						style={{ transform: `rotate(${deg}deg)` }}
					/>
				</div>
				{/**Lower part */}
				<div className='border-2 h-1/2 rounded-b-full flex items-center justify-center'>
					<div className=' font-serif text-2xl h-1/2 flex flex-col space-y-3 items-center justify-center text-center font-semibold'>
						{month} <br /> <p>✦</p>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default MonthsCard
