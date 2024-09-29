import React from 'react'
import "./WorkCardStyles.css"
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'

const Work = () => {
  return (
    <div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
    {WorkCardData.map((item, index) => {
  return (
    <WorkCard 
      key={index}  // Always provide a unique key for each mapped element
      src={item.imgsrc}
      title={item.title}
      details={item.text}
      view={item.view}
      codeSource={item.codeSrc}
    />
  );
})}
    </div>
    </div>
  )
}

export default Work