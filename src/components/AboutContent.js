import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom"
import React1 from "../assets/react1.png"
import React2 from "../assets/react2.jpeg"

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I</h1>
        <p>I am a friendly frontend developer. I create responsive and secure websites.</p>
        <Link to="/contact" className="btn">Contact</Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
            <img src={React2} className="img" alt='true'/>
            </div>
            <div className="img-stack bottom">
            <img src={React1} className="img" alt='true'/>
            </div>
        </div>
      </div>
    
    </div>
  )
}

export default AboutContent