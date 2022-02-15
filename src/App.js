import Calender from './components/Calender'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Months from './components/Months'
import { RecoilRoot } from 'recoil'
import MyNfts from './Pages/MyNfts'
import Profile from './Pages/Profile'
import LandingPage from './Pages/LandingPage'
import Merge from './Pages/Merge'
import { ParallaxProvider } from 'react-scroll-parallax'
import { useEffect, useRef, useState } from 'react'

function App() {
	const [scrollEl, setScrollElement] = useState()
	const ref = useRef()
	useEffect(() => {
		setScrollElement(ref.current)
	})
	return (
		<RecoilRoot>
			<Router>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Poppins:ital@1&display=swap'
					rel='stylesheet'
				></link>
				<link
					href='https://fonts.googleapis.com/css2?family=Play&family=Rowdies:wght@300&display=swap'
					rel='stylesheet'
				></link>
				<div
					className=' bg-black h-screen overflow-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white scrollbar-thumb-rounded-full'
					ref={ref}
				>
					<div className='max-w-6xl grid mx-auto'>
						<ParallaxProvider scrollContainer={scrollEl}>
							<NavBar />
							<Switch>
								<Route path='/select-date'>
									<Calender />
								</Route>
								<Route path='/mynfts'>
									<MyNfts />
								</Route>
								<Route path='/profile'>
									<Profile />
								</Route>
								<Route path='/merge'>
									<Merge />
								</Route>
								<Route path='/months'>
									<Months />
								</Route>
								<Route path='/'>
									<LandingPage />
								</Route>
							</Switch>
						</ParallaxProvider>
					</div>
				</div>
			</Router>
		</RecoilRoot>
	)
}

export default App
