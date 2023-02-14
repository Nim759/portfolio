import "./Heroimage.css"

import React from 'react'
import pic1 from "../../assests/pic1.jpg"
import { Link } from "react-router-dom"

const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" 
            src={pic1} alt="pic1" />
        </div>
        <div className="content">
            <p>HI, I'M A SOFTWARE ENGINEER.</p>
            <h1>Full stack developer.</h1>
        <div>
            <Link to = "/Project" className="btn">PROJECTS</Link>
            <Link to = "/Contact" className="btn-light">CONTACT</Link>
        </div>

        </div>
    </div>
  )
}

export default Heroimage