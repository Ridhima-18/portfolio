import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'


const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="About me" text="I am a software engineer specialising in frontend devlopment using React, Material-UI , Gitlab and testing libraries such as Jest Enzyme. I also have backend development experience in Golang, GraphQL and Java."/>
      <AboutContent/>
      <Footer/>
    </div>
    
  )
}

export default About