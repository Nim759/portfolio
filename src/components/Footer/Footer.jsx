import "./Footer.css";
import {FaHome,FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGithub} from 'react-icons/fa';
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>this is my web site</p>
                        <p>my first website</p>
                    </div>

                    <div className="phone">
                    <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>  
                    077-0547199 </h4>
                    </div>

                    <div className="email">
                    <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/> 
                    lnimesha759@gmail.com </h4> 
                    </div>
                
                </div>
            </div>
            <div className="right">
            <h4>About my site</h4>
            <p>my name is nimesha lakshani. i am studing in
                ITUM. I want to be an software engineer,full stack developer,
                web developer. I am learning MERN stack
            </p>
            <div className="social">
            <FaFacebook size={20} style={{color:"#fff",marginRight:"2rem"}} />
            <FaLinkedin size={20} style={{color:"#fff",marginRight:"2rem"}} />
            <FaGithub size={20} style={{color:"#fff",marginRight:"2rem"}} />
            
            </div></div>
        </div>
        </div>
  )
}

export default Footer