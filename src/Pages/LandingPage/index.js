import DateCard from '../../components/DateCard'
import { Parallax, useParallax } from 'react-scroll-parallax'
import MonthsCard from '../../components/MonthsCard'
import AirdropSection from './AirdropSection'
import airdropIcon from '../../assets/airdrop.png'
import FaqsAcc from './FaqsAcc' //componemt
import FaqsData from './faqs.json'
import NavBar from '../../components/NavBar'
import LandingNav from './LandingNav'
import { useRef } from 'react'

function LandingPage() {
	const aboutRef = useRef()
	const roadmapRef = useRef()
	const teamRef = useRef()
	const airdropRef = useRef()

	return (
		<>
			<LandingNav
				aboutRef={aboutRef}
				roadmapRef={roadmapRef}
				teamRef={teamRef}
				airdropRef={airdropRef}
			/>
			<div className='text-white mt-10 px-3 md:px-2 lg:px-auto md:w-full w-auto'>
				{/* section 1 */}
				<div className='flex'>
					{/* text, heroImage */}
					<div className='flex flex-col max-w-2xl mr-auto space-y-12 '>
						<Parallax speed={15}>
							<div className='text-5xl font-bold font-mochi mt-10 leading-normal pb'>
								MAKE IT YOUR DAY. LITERALLY!
							</div>
						</Parallax>

						<div className='text-zinc-50 text-2xl font-popins'>
							<Parallax opacity={[1.2, 0]}>
								365days of web3 is an attempt to preserve
								memories on-chain, forever. The calendar for
								each year will have 365-366 days. Each date can
								not only be minted but also personalised by the
								owner to add an image/text of their choice. The
								dates are dynamic NFTs, whose content can be
								customised by the user.
							</Parallax>
						</div>
						<div>
							Comming Soon
							<Parallax opacity={[1.1, 0]}>
								<div className='flex space-x-4 mt-3'>
									<div className='bg-white text-black p-3 rounded-2xl'>
										04 D
									</div>
									<div className='bg-white text-black p-3 rounded-2xl'>
										19 H
									</div>
									<div className='bg-white text-black p-3 rounded-2xl'>
										26 M
									</div>
								</div>
							</Parallax>
						</div>
					</div>
					{/* hero */}

					<div className='hidden md:flex text-black space-x-8 items-center pr-5 md:visible relative'>
						<div className='h-48 w-48 right-2 bg-zinc-200 absolute rounded-full blur-lg' />
						<div className='h-32 w-32 bg-zinc-500 absolute rounded-full blur-lg' />
						<div className='-rotate-12'>
							<Parallax speed={20}>
								<DateCard date='17' month='Feb' />
							</Parallax>
						</div>
						<div className='rotate-12'>
							<Parallax speed={35}>
								<DateCard date='14' month='Feb' />
							</Parallax>
						</div>
					</div>
				</div>
				{/* <div className='h-2 w-full mt-5'>
					<Parallax translateX={[-5, 50]} opacity={[-0.2, 1]}>
						<span className='-z-10'>365w3</span>
					</Parallax>
				</div> */}
				{/* section 2  */}
				<div ref={aboutRef} className='mt-8'></div>{' '}
				{/**to get to correct position coz not at exact position due to parallax*/}
				<Parallax speed={20}>
					<div className='h-[120vh] border-y-2 border-white grid grid-cols-2'>
						<div className='grid grid-rows-2 mt-8'>
							<div className='flex justify-center'>
								<MonthsCard month='MAR' />
							</div>
							<Parallax speed={2}>
								<div className='md:text-2xl text-base font-play'>
									<div className='md:text-3xl text-lg font-mochi'>
										Mint and Sell
									</div>{' '}
									<br /> You can also sell the date NFTs you
									own on our marketplace. You can mint them
									during any of the minting phases and set
									them up for sale, to attract other buyers. A
									customized NFT can be put up for sale too!
								</div>
							</Parallax>
						</div>

						<div className='grid grid-rows-2 mt-5'>
							<div className='md:text-2xl text-base font-play'>
								<div className='md:text-3xl text-lg font-mochi'>
									Mint and Personalize
								</div>{' '}
								<br /> You can mint a date during one of the
								phases and customize it to add an image or a
								text. The customized NFT will then appear on the
								calendar. You also have the option to lock it
								until a certain date and unlock it after (a
								sweet surprise for a loved one!)
							</div>
							<div className='flex justify-center'>
								<Parallax speed={8}>
									<MonthsCard month='JUL' />
								</Parallax>
							</div>
						</div>
					</div>
				</Parallax>
				{/* section 3 */}
				<Parallax>
					<div className=' bg-black space-y-24'>
						<div className='text-lg md:text-2xl text-center leading-relaxed font-play'>
							<span className='text-2xl md:text-3xl font-mochi'>
								UNDER THE HOOD
							</span>
							<br />
							There are very few platforms that are using the
							concept of Dynamic NFTs. Ours is one of those few
							platforms that attempts to customize an NFT based on
							user preferences. The old and the new NFT reside on
							IPFS and there's an on-chain updation of the
							tokenURI aspect as well. This ensures that all data
							is transparent and the system is decentralized in
							nature.{' '}
						</div>
						<div className='text-lg md:text-2xl text-center leading-relaxed font-play'>
							<span className='text-2xl md:text-3xl font-mochi'>
								BRAND BOARD
							</span>
							<br />
							The website for each year would be archived but
							would be viewable by others. The calendar for an
							year also acts as a "brand board" wherein - if you
							are an event organizer, you can mint the date of
							your event and then add additional details about the
							event to customize the date. The brand board for the
							entire year would be visible on our platform. A
							great way to brand your event, isn't it?
						</div>
					</div>
				</Parallax>
				{/* section roadmap */}
				<div ref={roadmapRef}></div>
				<Parallax opacity={[0.5, 2]} speed={20}>
					<div className='flex flex-col h-screen z-10 bg-black border-y-2'>
						<div className='text-3xl font-popins font-extrabold'>
							Roadmap
						</div>
						<div className='flex h-full py-3'>
							{/* 2 boxes side by side// can be done with only 1 box */}
							<div className=' border-r-2 border-dashed w-1/2 text-black flex flex-col justify-around items-end text-sm md:text-base text-center'>
								<div className='bg-white w-4/5 md:w-3/4 p-2 rounded-lg font-popins font-semibold mr-5'>
									Phase 1 <br />
									Minting will happen to offer the first 90
									days of 2022. 1st of January to 31st March
								</div>
								<div className='bg-white absolute left-1/2 md:w-2/5  p-2 rounded-lg font-popins font-semibold ml-5'>
									Phase 2 <br /> Minting will happen to offer
									the next 150 days of 2022. 1st of April to
									31st July.
								</div>
								<div className='bg-white w-4/5 md:w-3/4  p-2 rounded-lg font-popins font-semibold mr-5'>
									Phase 3 <br /> Minting will happen to offer
									the last 125 days of 2022. 1st of January to
									31st December
								</div>
								<div className='h-full absolute flex flex-col justify-around py-28 -mr-[0.70rem]'>
									{/* Current phase dots */}
									<div className='w-5 h-5 bg-white rounded-full'>
										{/** pulsing one */}
										<div className='w-5 h-5 bg-white rounded-full animate-ping'></div>
									</div>
									<div className='w-5 h-5 border-2 border-white bg-black rounded-full'></div>
									<div className='w-5 h-5 border-2 border-white bg-black rounded-full'></div>
								</div>
							</div>
						</div>
					</div>
				</Parallax>
				{/* section airdrop  */}
				<Parallax opacity={[0, 2]} speed={-3}>
					<div className='flex items-center' ref={airdropRef}>
						<div className='h-screen md:w-1/2 w-full flex flex-col justify-center'>
							<AirdropSection />
						</div>
						<div className='text-5xl md:flex mx-auto hidden'>
							<Parallax speed={-8}>
								<img
									src={airdropIcon}
									className='invert opacity-80'
								/>
							</Parallax>
						</div>
					</div>
				</Parallax>
				{/* section team  */}
				<Parallax opacity={[0.5, 2]}>
					<div
						className='flex h-fit min-h-screen z-10 bg-black flex-col items-center'
						ref={teamRef}
					>
						<div className='text-4xl font-popins'>Team Behind</div>
						{/* team grid */}
						<div className='grid md:grid-cols-3 grid-cols-2 gap-x-6 md:gap-x-28 gap-y-6 mt-10'>
							<div className=' max-h-60 border-2 hov aspect-1 group relative'>
								<a
									href='https://twitter.com/abhimore89'
									target='_blank'
								>
									<img
										src='https://pbs.twimg.com/profile_images/1488828586387718149/D0pL1Fa-_400x400.jpg'
										className='hov group-hover:rounded-[0rem] group-hover:grayscale-0'
									/>
								</a>
								<div className='absolute bottom-0 w-full h-1/3 opacity-80 group-hover:visible hidden duration-300 delay-1000 bg-slate-50'>
									vdf
								</div>
							</div>
							<div className=' max-h-60 border-2 hov aspect-1 group'>
								<img
									src='https://pbs.twimg.com/profile_images/1392222480106876928/6bGOhUXI_400x400.jpg'
									className='hov group-hover:rounded-[0rem] group-hover:grayscale-0'
								/>
							</div>
							<div className=' max-h-60 border-2 hov aspect-1'>
								<img
									src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'
									className='hov'
								/>
							</div>
							<div className=' max-h-60 border-2 hov aspect-1'>
								<img
									src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'
									className='hov'
								/>
							</div>
							<div className=' max-h-60 border-2 hov aspect-1'>
								<img
									src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'
									className='hov'
								/>
							</div>
							<div className=' max-h-60 border-2 hov aspect-1'>
								<img
									src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'
									className='hov'
								/>
							</div>
							<div className=' max-h-60 border-2 hov aspect-1'>
								<img
									src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'
									className='hov'
								/>
							</div>
						</div>
					</div>
				</Parallax>
				{/* footer  */}
				<div className='mb-10 border-t-2 mt-10 pt-5'>
					<span className='text-2xl font-serif'>FAQs</span>
					{FaqsData.faqs.map((item) => (
						<FaqsAcc question={item.q} answer={item.a} />
					))}
				</div>
			</div>
		</>
	)
}

export default LandingPage
