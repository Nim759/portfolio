import "./ProjectName.css";

import React from 'react'
import pic2 from "../../assests/pic2.jpg"
import { NavLink } from "react-router-dom";

const ProjectName = (props) => {
  return (
   
                <div className="project-card">
                    <img src={props.imgsrc} alt="image"/>
                    <h2 className="project-title">{props.title}</h2>
                    <div className="projectwork">
                        <p>{props.text}</p>
                        <div className="pro-btns">
                            <NavLink to= {props.view} className="btn">View</NavLink>
                            <NavLink to= "url.com" className="btn">Source</NavLink>

                        </div>
                    </div>
                </div>
   
  )
}

export default ProjectName