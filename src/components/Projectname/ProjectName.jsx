import "./ProjectName.css";

import React from 'react'
import pic2 from "../../assests/pic2.jpg"
import { NavLink } from "react-router-dom";

const ProjectName = () => {
  return (
    <div className="work-container">
        <div className="project-heading">
            <div className="project-container">
                <div className="project-card">
                    <img src={pic2} alt="image"/>
                    <h2 className="project-title">PROJECT TITLE</h2>
                    <div className="projectwork">
                        <p>this is content</p>
                        <div className="pro-btns">
                            <NavLink to= "url.com" className="btn">view</NavLink>
                            <NavLink to= "url.com" className="btn">Source code</NavLink>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default ProjectName