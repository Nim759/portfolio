import React from 'react'
import "./Contact.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Heroimageproject from '../../components/Heroimageproject/Heroimageproject';


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimageproject heading="CONTACTUS" text="Contact me via using following details"/>
      <Footer/>
    </div>
  )
}

export default Contact