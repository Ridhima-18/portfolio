import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone,FaTwitter } from "react-icons/fa"
import "./FooterStyles.css"
import React from 'react'


const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
        <div className="location">
            <FaHome size={0} color="#fff"/>
            <p>Shahdra, Delhi-110032, India</p>
        </div>
        <div className="location">
            <FaPhone size={20} color="#fff"/>
            <p>+91-7982687971</p>
        </div>
        <div className="location">
           <FaMailBulk size={20} color="#fff"/>
            <p>ridhimajain65@gmail.com</p>
        </div>
        </div>
        <div className="right">
        <h4>About me</h4>
        <p>My name is Ridhima Jain. I am an Experienced Front-end Developer skilled in data structures,Project Management,Software Development,req ,Requirement Gathering,Unit Testing,Code Development,Debugging,UI Development,Application Development,Cicd Pipeline</p>
        <div className="social">
        <FaFacebook size={25} color="#fff"/>
        <FaTwitter size={25} color="#fff"/>
        <FaLinkedin size={25} color="#fff"/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer