import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function NavBar() {
	const [currentAccount, setCurrentAccount] = useState()

	useEffect(() => {
		checkWallet()
	}, [])

	const checkWallet = async () => {
		try {
			const { ethereum } = window
			if (!ethereum) {
				console.log('Make sure you have metamask')
				return
			} else {
				console.log('Ethereum object is present')
			}

			/*
			 * Check if we're authorized to access the user's wallet
			 */
			const accounts = await ethereum.request({ method: 'eth_accounts' }) //checks if any account is connected
			if (accounts.length !== 0) {
				const account = accounts[0]
				console.log('Found an authorized account:', account)
				setCurrentAccount(account)
			} else {
				console.log('No authorized account found')
			}
			return accounts[0]
		} catch (err) {
			console.log(err)
		}
	}
	const connectWallet = async () => {
		try {
			const { ethereum } = window
			if (!ethereum) {
				alert('Make sure you have MetaMask!')
				return
			}
			const accounts = await ethereum.request({
				method: 'eth_requestAccounts',
			}) //request coonection
			console.log('Connected', accounts[0])
			setCurrentAccount(accounts[0])
		} catch (err) {
			console.log(err)
		}
	}
	return (
		<div className='bg-black p-6 rounded-b-md flex space-x-16 font-semibold'>
			{/**Logo */}
			<Link to='/'>
				<div className='font-serif text-white cursor-pointer text-3xl font-extrabold'>
					365Days
				</div>
			</Link>
			{/**List of nav */}
			<div className='text-white flex items-center space-x-6'>
				<Link to='/mynfts'>
					<p className='cursor-pointer'>My NFTs</p>
				</Link>
				<Link to='/profile'>
					<p className='cursor-pointer'>Profile</p>
				</Link>
				<Link to={{ pathname: '/merge', date: true }}>
					<p className='cursor-pointer'>Merge</p>
				</Link>
			</div>
			{/**connect wallet */}
			<div className=' grow flex justify-end'>
				{!currentAccount ? (
					<button
						className='btn p-3 font-semibold'
						onClick={connectWallet}
					>
						Connect Wallet
					</button>
				) : (
					<span className='btn text-black cursor-default p-3 font-semibold'>
						Hi {currentAccount.substring(0, 8)}...
					</span>
				)}
			</div>
		</div>
	)
}

export default NavBar
