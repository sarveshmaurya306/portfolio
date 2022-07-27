import React from 'react'
import './Intro.css'

function Intro() {
	return (
		<span className='d-flex flex-column'>
			<span className='font-normal pt-2' > Hello <span className='color-primary bolder font-normal'>  I'm  </span></span>
			<span className='mb-1 bolder font-title color-primary underline'> Sarvesh Kumar </span>

			<span className='bold font-heading pt-1'> A Full Stack Developer & coder </span><br />
			<span className=' pt-1'>I love to build new projects just to tickle my brain. </span>
			<span>Now a days, people are addicted to binge watching and Snapchatting.</span>
			<span> I am geeky and I am addicted to Green Dots of Leetcode & Github.</span>
			<span>BTW I don't use Linux.(The qoute)😁😊</span>
		</span>
	)
}

export default Intro