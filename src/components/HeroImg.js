import React from 'react'
import "./HeroImgStyles.css"
import {Link} from "react-router-dom"
import IntroImg from "../assets/intro.jpg"

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
        <img className='intro-img' src={IntroImg} alt='intro-img'/>
        </div>
        <div className='content'>
        <p>Hi, I am a software engineer</p>
        <h1>React Developer.</h1>
        <div className='btnGrp'>
            <Link to="/project" className='btn'>Projects</Link>
            <Link to="/contact" className='btn btn-light'>Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default HeroImg