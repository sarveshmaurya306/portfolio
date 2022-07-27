import React from 'react'
import './Card.css'
import HtmlSvg from '../../images/svg/html.svg'
import CssSvg from '../../images/svg/css.svg'
import JavaScriptSvg from '../../images/svg/javascript.svg'
import SocketSvg from '../../images/svg/socket-io.svg'
import MongoDbSvg from '../../images/svg/mongodb.svg'
import ReactSvg from '../../images/svg/react.svg'
import NodeJsSvg from '../../images/svg/nodejs.svg'
import FirebaseSvg from '../../images/svg/firebase.svg'
import BootstrapSvg from '../../images/svg/bootstrap.svg'
import FigmaSvg from '../../images/svg/figma.svg'


let technologies= {"html":[{"svg": HtmlSvg}, {techLink: "https://en.wikipedia.org/wiki/HTML"}], 
	"css":[{"svg": CssSvg}, {techLink: "https://developer.mozilla.org/en-US/docs/Web/CSS"}], 
	"javascript":[{"svg": JavaScriptSvg}, {techLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"}], 
	"mongodb":[{"svg": MongoDbSvg}, {techLink: "https://www.mongodb.com/"}], 
	"react":[{"svg": ReactSvg}, {techLink: "https://reactjs.org/"}], 
	"nodejs":[{"svg": NodeJsSvg}, {techLink: "https://nodejs.org/en/"}], 
	"socketio":[{"svg": SocketSvg}, {techLink: "https://socket.io/"}], 
	"firebase":[{"svg": FirebaseSvg}, {techLink: "https://firebase.google.com/"}],
	"bootstrap":[{"svg": BootstrapSvg}, {techLink: "https://getbootstrap.com/"}],
	"figma":[{"svg":FigmaSvg}, {techLink:"https://www.figma.com/"}]
}

function Card({heading, desc, tech, link}) {
  return (
	<div className='card_outer'>
		<div className='card_inner'>
			<div className='bold font-heading underline' > {heading} </div>
			<div className="font-transparent" style={{width:'100%'}}> {desc} </div>
			<div className="font-transparent mt-4" >
				{/*<img src={technologies[css]} alt="techImg"/>*/}
				{tech?.map((tc, id)=>{
					return <a key={id} href={technologies[tc][1].techLink} target="_blank" rel="noopener noreferrer" className='font-transparent me-3'><img className='font-transparent' src={technologies[tc][0].svg} alt="techImg" width={25}/></a>
				})}
			</div>
			<div className="font-normal underline">
				<a style={{textDecoration:'none', backgroundColor:'transparent'}} target="_blank" rel="noopener noreferrer" className=" text-light" href={link} >Live</a>
			</div>
		</div>
	</div>
  )
}

export default Card