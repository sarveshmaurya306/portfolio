import React from 'react'
import './Footer.css'
import { motion } from 'framer-motion'
import LogoSvg from '../../images/svg/left_nav.svg'
import allData from '../../allData/data'

function Footer() {
	return (
		<div>
			<div className='pt-3 d-flex justify-content-between'>
			<span style={{ width: '50%' }}>
				<motion.img drag dragConstraints={{
					top: -50,
					left: -50,
					right: 50,
					bottom: 50,
				}}
					dragElastic={0.1}
					dragSnapToOrigin src={LogoSvg} alt="logo" className='logo-responsive'
					whileDrag={{ translateX: [0, -5, 0, 5, 0] }}
					transition={{ duration: 0.09, repeat: 40, type: "just" }}
				/>
			</span>
			<span className="d-flex me-5" >
				<span >
					<ul className="d-flex" style={{ flexDirection: 'column' }}>
						<li className='top-nav-link px-3 pb-3 bold '>
							<span className=''>
								<a href="#about" style={{ textDecoration: 'none', color: 'white' }}>About</a>
							</span>
						</li>
						<li className='top-nav-link px-3 pb-3 bold '>
							<span className=''>
								<a href="#project" style={{ textDecoration: 'none', color: 'white' }}>Projects</a>
							</span>
						</li>
						<li className='top-nav-link px-3 pb-3 bold '>
							<span className=''>
								<a href="#skill" style={{ textDecoration: 'none', color: 'white' }}>Skills</a>
							</span>
						</li>
					</ul>
				</span>
				<span>
					<ul className="d-flex" style={{ flexDirection: 'column' }}>
						<li className='top-nav-link px-3 pb-3 bold '>
							<span className=''>
								<a target="_blank"  rel="noreferrer" href={allData?.linkedInUrl} style={{ textDecoration: 'none', color: 'white' }}>LinkedIn</a>
							</span>
						</li>
						<li className='top-nav-link px-3 pb-3 bold '>
							<span className=''>
								<a target="_blank"  rel="noreferrer" href={allData.githubUrl} style={{ textDecoration: 'none', color: 'white' }}>Github</a>
							</span>
						</li>
					</ul>
				</span>
			</span>
		</div>
		<div className="text-center mb-3">&copy;2022 <a target="_blank" className='underline' rel="noreferrer" href={allData.linkedInUrl} style={{ textDecoration: 'none', color: 'white' }}>Sarvesh Kumar</a>. All rights reserved.</div> 
		</div>
	)
}

export default Footer