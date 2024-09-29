import React from 'react'
import "./HeroImgStyles.css"
import BgImg from "../assets/bgImg.jpg"

const HeroImg2 = (props) => {
  return (
    <div className='hero'>
        <div className='mask'>
        <img className='intro-img' src={BgImg} alt='intro-img'/>
        </div>
        <div className='content'>
        <h1>{props.heading}</h1>
        <p style={{textTransform:'none'}}>{props.text}</p>
        </div>
    </div>
  )
}

export default HeroImg2