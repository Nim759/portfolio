import React from 'react'
import "./About.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Heroimageproject from '../../components/Heroimageproject/Heroimageproject';

const About = () => {
  return (
    <div>
      <Navbar/>
      <Heroimageproject heading="ABOUT ME" text="Who is me read to find it"/>
      <Footer/>
    </div>
  )
}

export default About