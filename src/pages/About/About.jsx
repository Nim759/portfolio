import React from 'react'
import "./About.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Heroimageproject from '../../components/Heroimageproject/Heroimageproject';

import AboutContent from '../../components/About/About';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimageproject heading="ABOUT ME" text="Who is me read to find it"/>
     <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About