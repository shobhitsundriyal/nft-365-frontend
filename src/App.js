import Calender from './components/Calender'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Months from './components/Months'
import { RecoilRoot } from 'recoil'
import MyNfts from './Pages/MyNfts'
import Profile from './Pages/Profile'
import LandingPage from './Pages/LandingPage'
import Merge from './Pages/Merge'

function App() {
	return (
		<RecoilRoot>
			<Router>
				<div className=' bg-black h-screen overflow-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white '>
					<div className='max-w-6xl grid mx-auto'>
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
							<Route path='/land'>
								<LandingPage />
							</Route>
							<Route path='/merge'>
								<Merge />
							</Route>
							<Route path='/'>
								<Months />
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		</RecoilRoot>
	)
}

export default App
