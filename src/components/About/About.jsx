import "./About.css"
import pic1 from "../../assests/pic1.jpg"
import pic2 from "../../assests/pic2.jpg"
import React from 'react'
import { Link } from "react-router-dom"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
           <h1>Who Am I?</h1>
           <p>I am a quick learner, have excellent problem-solving skills, and
have a proven ability to work well in a team. I am excited about
the opportunity to apply my skills and knowledge as a Software
Engineering intern and contribute to the development of
innovative projects

           </p>
           <Link to = "/Contact">
            <button className="btn">Contact</button>
           </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack-top">
                    <img src = {pic1} 
                    className="img"
                    alt="true"
                    />

                </div>

                <div className="img-stack-bottom">
                    <img src = {pic2} 
                    className="img"
                    alt="true"
                    />

                </div>
            </div>
        </div>

    </div>
  )
}

export default AboutContent