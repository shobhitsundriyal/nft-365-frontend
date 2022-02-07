import { useState } from 'react'
import { Redirect } from 'react-router'

function Merge({ date }) {
	const [title, setTitle] = useState()
	const [description, setDescription] = useState()
	const [image, setImage] = useState()

	const dragOver = (e) => {
		e.preventDefault()
	}

	const dragEnter = (e) => {
		e.preventDefault()
	}

	const dragLeave = (e) => {
		e.preventDefault()
	}

	const fileDrop = (e, type) => {
		e.preventDefault()
		const droppedfile = e.dataTransfer.files
		if (validFile(droppedfile[0])) {
			setImage(URL.createObjectURL(droppedfile[0]))
		} else {
			console.log('Please select a vaid file')
		}
	}

	const chooseFile = (e) => {
		e.preventDefault()
		const droppedfile = e.target.files

		if (validFile(droppedfile[0])) {
			setImage(URL.createObjectURL(droppedfile[0]))
		} else {
			console.log('Please select a vaid file')
		}
	}

	const validFile = (file) => {
		const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
		if (validTypes.indexOf(file.type) === -1) {
			return false
		}
		return true
	}

	return (
		<div className='text-white animate-fade-in my-6 grid grid-cols-3'>
			{/* {!date && <Redirect to='/select-date' />} */}
			{date}
			{/* Let's build ui first */}
			{/* Left side */}
			<div className=' col-span-2 px-4'>
				<span className='font-extrabold text-2xl font-serif'>
					Personlize NFTs
				</span>
				<div className='flex flex-col mt-10 space-y-3'>
					<span className='text-slate-400'>
						Drag or choose your upload file
					</span>
					<input
						type='file'
						className='w-full h-52 border-2'
						onDragOver={dragOver}
						onDragEnter={dragEnter}
						onDragLeave={dragLeave}
						onDrop={fileDrop}
						onChange={chooseFile}
					/>
				</div>
				<div className='flex flex-col mt-10 space-y-3'>
					<span className=''>NFT Name</span>
					<input
						type='text'
						className='w-full bg-black border-2 outline-none p-2'
						placeholder='e.g. "Developer Day"'
						onChange={(e) => {
							setTitle(e.target.value)
						}}
						maxLength={17}
					/>
				</div>
				<div className='flex flex-col mt-10 space-y-3'>
					<span className=''>Description</span>
					<input
						type='text'
						className='w-full bg-black border-2 outline-none p-2'
						placeholder='e. g. “The day we fought to win the title..”'
						onChange={(e) => {
							setDescription(e.target.value)
						}}
					/>
				</div>
				<button className='mt-8 btn'>Save Changes</button>
			</div>

			{/*Right Side */}
			<div className='ml-8 pl-20 pr-5 flex flex-col justify-center space-y-3 mt-12 group mb-14'>
				<span className='font-medium'>Preview Item</span>
				<div className='border-2 w-full h-[85%] max-h-[27rem] relative'>
					<img src={image} className=' max-h-[80%] w-full' />
					<div className='desc bg-white h-[80%] absolute top-0 text-black'>
						{/* hell */}
					</div>
					<div className='flex flex-col absolute bottom-0 h-[20%] items-center justify-center w-full'>
						<span className='text-xl font-serif'>{title}</span>
						<span className='text-slate-500'>
							Owner: tararara.eth
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Merge
