import React from "react";
import "./Project.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Heroimageproject from "../../components/Heroimageproject/Heroimageproject";

const Project = ( )=>{
    return(
        <div>
            <Navbar/>
            <Heroimageproject heading="PROJECTS" text="some of my recent works"/>
            <Footer/>
        </div>
    )
}

export default Project