import React from 'react'
import LogoSvg from '../../images/svg/left_nav.svg'
import './Navbar.css'
import { motion } from 'framer-motion'

function Navbar() {
	return (
		<div className=" d-flex justify-content-between ">
			<span className='pt-3'>
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
			<span >
				<ul className="d-flex">
					<li className='top-nav-link p-3 bold '>
						<span className='underline'>
							<a href="#about" style={{ textDecoration: 'none', color: 'white' }}>About</a>
						</span>
					</li>
					<li className='top-nav-link p-3 bold '>
						<span className='underline'>
							<a href="#project" style={{ textDecoration: 'none', color: 'white' }}>Projects</a>
						</span>
					</li>
					<li className='top-nav-link p-3 bold '>
						<span className='underline'>
							<a href="#skill" style={{ textDecoration: 'none', color: 'white' }}>Skills</a>
						</span>
					</li>
				</ul>
			</span>
		</div>
	)
}

export default Navbar