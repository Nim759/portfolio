import React from "react";
import Heroimage from "../../components/Heroimage/Heroimage";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./Home.css"

const Home = ( )=>{
    return(
        <div>
            <Navbar/>
            <Heroimage/>
            <Footer/>
        </div>
    )
}

export default Home