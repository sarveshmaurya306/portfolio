import React from 'react'
import './Skills.css'

import HtmlSvg from '../../images/svg/html.svg'
import CssSvg from '../../images/svg/css.svg'
import JavaScriptSvg from '../../images/svg/javascript.svg'
import MongoDbSvg from '../../images/svg/mongodb.svg'

import ReactSvg from '../../images/svg/react.svg'
import NodeJsSvg from '../../images/svg/nodejs.svg'
import FirebaseSvg from '../../images/svg/firebase.svg'
import BootstrapSvg from '../../images/svg/bootstrap.svg'

import DockerSvg from '../../images/svg/docker.svg'
import JavaSvg from '../../images/svg/java.svg'
import CppSvg from '../../images/svg/cpp.svg'
import MySqlSvg from '../../images/svg/mysql.svg'

let topSkillIcons=[
	{svg:HtmlSvg, link:"https://en.wikipedia.org/wiki/HTML"},
	{svg:CssSvg, link:"https://developer.mozilla.org/en-US/docs/Web/CSS"},
	{svg:JavaScriptSvg, link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
	{svg: MongoDbSvg, link:"https://www.mongodb.com/"},
	{svg: ReactSvg, link:"https://reactjs.org/"},
	{svg: NodeJsSvg, link:"https://nodejs.org/en/"},
]
let bottomSkillIcons=[
	{svg:FirebaseSvg, link:"https://firebase.google.com/"},
	{svg:DockerSvg, link:'https://www.docker.com/'},
	{svg:JavaSvg, link:"https://www.java.com/en/"},
	{svg: MySqlSvg, link:"https://www.mysql.com/"},
	{svg: CppSvg, link:"https://firebase.google.com/"},
	{svg: BootstrapSvg, link:"https://getbootstrap.com/"},
]


function Skills() {
  return (
	<div>
		<div className="underline underline font-title boldest">
			Skills
		</div>
		<div className=' d-flex justify-content-between' style={{flexWrap:"wrap", flexDirection:'column'}} >
			<div className='mt-5 d-flex justify-content-around' style={{alignItems:'baseline'}}>
				{topSkillIcons?.map((oneSkill, id)=>{
					return <a key={id} href={oneSkill.link} target="_blank" rel="noopener noreferrer"><img className='img-responsive' src={oneSkill.svg} alt="skill img" /></a>
				})}
			</div>
			<div className='mt-5 d-flex justify-content-around' style={{alignItems:'baseline'}}>
				{bottomSkillIcons?.map((oneSkill, id)=>{
					return <a key={id} href={oneSkill.link} target="_blank" rel="noopener noreferrer"><img className='img-responsive' src={oneSkill.svg} alt="skill img" /></a>
				})}
			</div>
		</div>
	</div>
  )
}

export default Skills