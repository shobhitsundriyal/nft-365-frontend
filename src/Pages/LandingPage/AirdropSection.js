import React from 'react'

function AirdropSection() {
	return (
		<>
			{/* parent flex col */}
			<div className='text-3xl mb-10 text-center'>
				Get your's Date Airdropped
			</div>
			<form
				onSubmit={(e) => {
					e.preventDefault()
					console.log(e.target[0].value, e.target[1].value)
					e.target[0].value = ''
					e.target[1].value = ''
				}}
			>
				<div className='flex flex-col max-w-xl font-mono space-y-5 '>
					<input
						type='text'
						className='inp'
						placeholder='Your eth address'
					/>
					<input
						type='date'
						className='inp'
						min='2022-01-01'
						max='2022-03-31'
					/>
					<input
						type='submit'
						value='Submit'
						className='font-mono text-black bg-white max-w-fit p-2 mx-auto cursor-pointer shadow-sm shadow-white active:bg-slate-400 outline-none'
					/>
				</div>
			</form>
		</>
	)
}

export default AirdropSection
