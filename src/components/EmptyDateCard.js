import React from 'react'

function EmptyDateCard() {
	return (
		<div>
			{/*make bg transpaent*/}
			<div className=' bg-black rounded-md flex flex-col justify-center items-center'>
				{/**Date */}
				<div className='p-10 text-4xl'>&nbsp;</div>

				{/**Mint */}

				<div className='btn bg-black'>&nbsp;</div>
			</div>
		</div>
	)
}

export default EmptyDateCard
