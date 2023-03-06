import React from "react";
import "./Project.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Heroimageproject from "../../components/Heroimageproject/Heroimageproject";
import Details from "../../components/Details/Details";



const Project = ( )=>{
    return(
        <div>
            <Navbar/>
            <Heroimageproject heading="PROJECTS" text="some of my recent works"/>
            <Details/>
            <Footer/>
        </div>
    )
}

export default Project