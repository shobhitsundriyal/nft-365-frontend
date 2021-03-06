import axios from 'axios'

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
					var data = {
						ethAddress: e.target[0].value,
						email: e.target[0].value,
						name: e.target[0].value,
						preferredDate: e.target[0].value,
					}
					// console.log(data)
					axios
						.post('https://api.365w3.xyz/api/AirDrops', data)
						.then((res) => console.log(res))
						.catch((err) => console.log(err))
					e.target[0].value = ''
					e.target[1].value = ''
					e.target[2].value = ''
					e.target[3].value = ''
				}}
			>
				<div className='flex flex-col max-w-xl font-mono space-y-5 '>
					<input
						type='text'
						className='inp'
						placeholder='Your Name'
						required
					/>
					<input
						type='email'
						className='inp'
						placeholder='Your Email'
						required
					/>
					<input
						type='text'
						className='inp'
						placeholder='Your eth address'
						required
					/>
					<input
						type='date'
						className='inp'
						placeholder='Select Date'
						min='2022-01-01'
						max='2022-03-31'
						style={{ webkitAppearance: 'none' }}
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
