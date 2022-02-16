import React from 'react'

function AboutSectionCard({ desc, dayTitle }) {
	return (
		<div className='aspect-[3/5] w-28 sm:w-44 lg:w-52 p-2'>
			<div className='border-2 h-full relative'>
				<div className='h-[78%] w-full absolute top-0 -z-10 bg-white font-mono text-black text-center my-auto items-center flex'>
					<span className='text-sm leading-snug lg:text-xl px-2'>
						{desc}
					</span>
				</div>
				{!desc && (
					<img
						src='https://images.pexels.com/photos/11130817/pexels-photo-11130817.jpeg?cs=srgb&dl=pexels-bulut-tuncay-11130817.jpg&fm=jpg'
						className='h-[78%] w-full'
					/>
				)}
				<div className='absolute h-[22%] bottom-0 font-semibold flex flex-col items-center justify-center w-full text-xs sm:text-base lg:text-xl'>
					{dayTitle ? (
						<div className=''>{dayTitle}</div>
					) : (
						<div className=''>22 May</div>
					)}
					<div className='text-[0.6rem] sm:text-sm lg:text-base text-gray-500'>
						Owner: vitalik.eth
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutSectionCard
