import React from 'react'
import NavBar from './NavBar/Navbar'
import Intro from './Intro/Intro'
import MyResumeButton from './Button/MyResumeButton'

import selfImg from '../images/svg/self_image.svg'
import github from '../images/svg/github.svg'
import lc from '../images/svg/lc.svg'
import linkedin from '../images/svg/linked in.svg'
import nextpagetriangle from '../images/svg/next-page-triangle.svg'
import {motion} from 'framer-motion'
import Projects from './Projects/Projets.js'
import Skills from './Skills/Skills.js'
import Footer from './Footer/Footer.js'
import './Body.css'
import allData from '../allData/data'


function Body() {
	return (
		<div id="about">
			<NavBar />
			<div className='home_page_decoration' >
				<div className="pb-5 pb-lg-0 d-flex align-item-center justify-content-between reverse-row">
					<span style={{width:'100%'}}>
						<Intro />
					</span>
					<span className='all-on-small'>
						<img className='mobile-center' src={selfImg} alt="self pic" width="" height="400" />
					</span>
				</div>
				<a href={allData.resumeUrl} target="_blank" rel="noreferrer"><MyResumeButton /></a>
				<div className='pt-3'>
					<button className='pe-3' style={{background:'transparent', border:'none'}}> 
						<a href={allData.linkedInUrl} target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" width={37} /></a>
					</button>
					<button className='pe-3' style={{background:'transparent', border:'none'}}> 
						<a href={allData.githubUrl} target="_blank" rel="noopener noreferrer"><img src={github} alt="" width={37} /></a>
					</button>
					<button className='pe-3' style={{background:'transparent', border:'none'}}> 
						<a href={allData.leetcodeUrl} target="_blank" rel="noopener noreferrer"><img src={lc} alt="" width={37} /></a>
					</button>
				</div>
				<div className='spaced text-center'>
					<button style={{background:'transparent', border:'none'}}> 
						<a href="#project">
							<motion.img 
							src={nextpagetriangle} alt="" width={90} 
							animate={{
								translateY:[0, -25, 0]
							}}
							transition={{ repeat: Infinity, duration: 4 }}
							/>
						</a>
					</button>
				</div>
				{/*project page starting*/}
				<div className='spaced' id="project">
					<Projects/>
				</div>
				<div className="spaced" id="skill">
					<Skills/>
				</div>
				<div className="spaced">
					<Footer/>
				</div>
			</div>
			<div className="underline" style={{width:'100vw', height:"100px"}}></div>
		</div>
	)
}

export default Body