import { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function LandingNav({ aboutRef, roadmapRef, teamRef, airdropRef }) {
	//const elementRef = useRef(aRef)
	//useEffect(() => aRef.current.scrollIntoView({ behavior: 'smooth' }))
	function scrollTo(_ref) {
		//expects ref
		_ref.current.scrollIntoView({ behavior: 'smooth' })
	}
	console.log(aboutRef)
	return (
		<div className='bg-black p-6 rounded-b-md flex space-x-16 font-semibold'>
			{/**Logo */}
			<div className='font-serif text-white cursor-pointer outline-none text-xl md:text-3xl font-extrabold'>
				365W3<sup>✦</sup>
			</div>

			<div className='text-white md:flex items-center space-x-6 hidden'>
				<a href='/#about' onClick={() => scrollTo(aboutRef)}>
					<p className='cursor-pointer'>About</p>
				</a>
				<a href='/#roadmap' onClick={() => scrollTo(roadmapRef)}>
					<p className='cursor-pointer'>Roadmap</p>
				</a>
				<a href='/#team' onClick={() => scrollTo(teamRef)}>
					<p className='cursor-pointer'>Team</p>
				</a>
			</div>
			<div className='flex grow md:flex justify-end font-mono'>
				<a
					href='/#airdrop'
					className='btn sm:p-2 sm:font-semibold'
					onClick={() => scrollTo(airdropRef)}
				>
					Airdrop
				</a>
			</div>
		</div>
	)
}

export default LandingNav
