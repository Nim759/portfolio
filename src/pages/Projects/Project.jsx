import React from "react";
import "./Project.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Heroimageproject from "../../components/Heroimageproject/Heroimageproject";
import Details from "../../components/Details/Details";
import Work from "../../components/Work/Work";



const Project = ( )=>{
    return(
        <div>
            <Navbar/>
            <Heroimageproject heading="PROJECTS" text="some of my recent works"/>
           <Work/>
            <Details/>
            <Footer/>
        </div>
    )
}

export default Project