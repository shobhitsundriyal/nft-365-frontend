import DateCard from '../../components/DateCard'
import { Parallax, useParallax } from 'react-scroll-parallax'
import MonthsCard from '../../components/MonthsCard'
import AirdropSection from './AirdropSection'
import airdropIcon from '../../assets/airdrop.png'

function LandingPage() {
	return (
		<>
			<div className='text-white mt-16 px-3 md:px-2 lg:px-0 md:w-full w-auto'>
				{/* section 1 */}
				<div className='flex'>
					{/* text, heroImage */}
					<div className='flex flex-col max-w-2xl mr-auto space-y-12 '>
						<div className='text-5xl font-bold font-serif'>
							<Parallax speed={15}>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Integer nec odio. Praesent
								libero.
							</Parallax>
						</div>

						<div className='text-slate-300 text-xl font-popins'>
							<Parallax opacity={[1.2, 0]}>
								Sed nisi. Nulla quis sem at nibh elementum
								imperdiet. Duis sagittis ipsum. Praesent mauris.
								Fusce nec tellus sed augue semper porta. Mauris
								massa. Vestibulum lacinia arcu eget nulla.
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
				<Parallax speed={20}>
					<div className='h-[120vh] border-y-2 border-white mt-8 grid grid-cols-2'>
						<div className='grid grid-rows-2 mt-8'>
							<div className='flex justify-center'>
								<MonthsCard month='MAR' />
							</div>
							<Parallax speed={2}>
								<div className='md:text-3xl text-base font-mochi'>
									Ut ultrices ultrices enim. Curabitur sit
									amet mauris. Morbi in dui quis est pulvinar
									ullamcorper. Nulla facilisi. Ut ultrices
									ultrices enim. Curabitur sit amet mauris.
									Morbi in dui quis est pulvinar ullamcorper.
									Nulla facilisi.
								</div>
							</Parallax>
						</div>

						<div className='grid grid-rows-2 mt-5'>
							<div className='md:text-4xl text-base font-mochi max-w-sm'>
								Ut ultrices ultrices enim. Curabitur sit amet
								mauris. Morbi in dui quis est pulvinar
								ullamcorper. Nulla facilisi.
							</div>
							<div className='flex justify-center'>
								<Parallax speed={10}>
									<MonthsCard month='JUL' />
								</Parallax>
							</div>
						</div>
					</div>
				</Parallax>

				{/* section 3  */}
				<Parallax opacity={[0, 2]} speed={-3}>
					<div className='flex items-center'>
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

				{/* section 3 */}
				<Parallax opacity={[0.5, 2]} speed={20}>
					<div className='flex h-screen z-10 bg-black border-y-2'>
						<div className='text-3xl font-popins font-extrabold'>
							Roadmap
						</div>
					</div>
				</Parallax>

				{/* section 4  */}
				<Parallax opacity={[0.5, 2]}>
					<div className='flex h-fit min-h-screen z-10 bg-black flex-col items-center'>
						<div className='text-4xl font-popins'>Team Behind</div>
						{/* team grid */}
						<div className='grid md:grid-cols-3 grid-cols-2 gap-x-6 md:gap-x-28 gap-y-6 mt-10'>
							<div className=' max-h-60 border-2 hov aspect-1 group relative'>
								<img
									src='https://pbs.twimg.com/profile_images/1488828586387718149/D0pL1Fa-_400x400.jpg'
									className='hov group-hover:rounded-[0rem] group-hover:grayscale-0'
								/>
								<div className='absolute bottom-0 w-full h-1/3 opacity-80 group-hover:visible hidden duration-300 delay-1000 bg-slate-50'>
									vdf
								</div>
							</div>
							<div className=' max-h-60 border-2 hov aspect-1 group'>
								<img
									src='https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3'
									className='hov group-hover:rounded-[5rem] group-hover:grayscale-0'
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
				<div className='h-[50vh] bg-zinc-900'>FOOTER</div>
			</div>
		</>
	)
}

export default LandingPage
