import React from 'react'
import "./Certificates.css"
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Heroimageproject from '../../components/Heroimageproject/Heroimageproject';
import Quelification from '../../components/Certificate/Quelification';



const Certificate = () => {
  return (
    <div>
      <Navbar/>
      <Heroimageproject heading="CERTIFICATES" text="Contact me via using following details"/>
        <Quelification/>
      <Footer/>
    </div>
  )
}

export default Certificate