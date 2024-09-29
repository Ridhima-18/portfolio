import "./WorkCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
  return (
<div className="project-card">
<img  className="proj-img" src={props.src} alt="project3-img" />
<h2 className="project-title">{props.title}</h2>
<div className="pro-details"><p>{props.details}</p></div>
<div className="pro-btns">
<NavLink to={props.view} className='btn'>View</NavLink>
<NavLink to={props.codeSource} className='btn'>Source</NavLink>
</div>
</div>
  )
}

export default WorkCard