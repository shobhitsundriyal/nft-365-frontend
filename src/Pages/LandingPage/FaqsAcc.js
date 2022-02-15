import { useState } from 'react'

function FaqsAcc({ question, answer }) {
	const [isOpen, setIsopen] = useState(false)
	return (
		<div>
			<div
				className='w-full border-2 border-slate-400 rounded-lg cursor-pointer p-1 my-2 flex'
				onClick={() => setIsopen(!isOpen)}
			>
				<div>{question}</div>
				<div className='grow flex justify-end pr-2'>˅</div>
			</div>
			{isOpen && (
				<div className='animate-fade-in px-2 ml-2 border-slate-500 rounded-b-lg border-l-2'>
					{answer}
				</div>
			)}
		</div>
	)
}

export default FaqsAcc
