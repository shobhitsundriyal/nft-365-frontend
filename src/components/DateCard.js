import { useState } from 'react'

function DateCard({ date, imgurl, owner, month, description, title }) {
	const [showDescription, setShowDescription] = useState(false)
	return (
		<>
			{/*make bg transpaent*/}
			<div
				className=' h-52 w-32 border-[1px] border-white relative cursor-default bg-black group'
				onClick={() => {
					setShowDescription(!showDescription)
				}}
			>
				{/** border design */}
				<div className='h-1/2 flex border-b-[1px]'>
					<div className='h-full w-1/2 border-r-[1px]'></div>
					<div className='h-full w-1/2 '></div>
				</div>
				{/** img + button */}

				{/**img or date */}
				{/**scaling issue if landscape */}
				{imgurl ? (
					<>
						<img
							src={imgurl}
							className='absolute top-0 max-h-40 w-full'
						/>
						<div className='bg-white absolute top-0 h-40 w-full px-2 font-mono text-zinc-800 font-extrabold leading-[0.65rem] text-[0.55rem] flex items-center opacity-0 group-hover:opacity-100 transition-opacity delay-100 ease-in'>
							{description}
						</div>
						{showDescription && (
							<span className='text-yellow-600 z-20'>Hello</span>
						)}
					</>
				) : (
					<>
						<div className='h-[4.7rem] w-16 bg-white absolute top-[31%] left-1/4 rounded-md items-center justify-center flex font-bold text-center font-serif text-xl'>
							{date < 10 ? 0 : <p></p>}
							{date} <br /> {month}
						</div>
					</>
				)}

				{imgurl ? (
					<div className='absolute bottom-0 w-full flex flex-col items-center justify-center pb-1'>
						<div className='relative flex justify-center'>
							<div
								className='text-white text-sm absolute opacity-100 
							group-hover:opacity-0 transition-opacity delay-100'
							>
								{date}&nbsp;
								{month}
							</div>
							<div className='text-white text-[0.7rem] font-semibold opacity-0 group-hover:opacity-100 transition-opacity delay-100'>
								{title}
							</div>
						</div>
						<div className=' text-slate-400 text-[0.6rem] font-thin'>
							Owner:{owner}
						</div>
					</div>
				) : (
					<button className='btn absolute bottom-0 w-full p-0 text-black border-2 border-black'>
						MINT
					</button>
				)}
			</div>
		</>
	)
}

export default DateCard
