import React from "react";
import Heroimage from "../../components/Heroimage/Heroimage";
import Navbar from "../../components/Navbar/Navbar";

import "./Home.css"

const Home = ( )=>{
    return(
        <div>
            <Navbar/>
            <Heroimage/>
        </div>
    )
}

export default Home