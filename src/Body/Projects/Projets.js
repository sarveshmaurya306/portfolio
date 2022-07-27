import React from 'react'
import Card from '../Card/Card'
import allData from '../../allData/data'

let cardData= allData.allProjects;

function Projets() {

  return (
	<div className=''>
		<div className="underline font-title boldest">
			Projects
		</div>
		<div className='mt-5 d-flex mobile-center' style={{flexWrap:"wrap"}} >
			{cardData.map((item, id)=>{
				return <Card key={id} heading={item.heading} desc={item.desc} tech={item.tech} link={item.link}/>
			})}
		</div>
	</div>
  )
}

export default Projets