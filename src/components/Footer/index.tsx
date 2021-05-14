import React from "react";
import { Link } from "react-router-dom";
import linkedinImg from "./../../assets/images/linkedin.svg";
import instagram from "./../../assets/images/instagram.svg";
import whatsapp from "./../../assets/images/whatsapp.svg";

import { SiWhatsapp } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { SiGmail } from 'react-icons/si';


import "./styles.css"

function Footer(){
  return(
    <footer className="page-footer">
      <h1>Contato:</h1>
      <SiGmail  size={30} className="gmail"/> 
      <h2>estercarvalhodealencar@gmail.com</h2>

      <div className="footerIcons-div">

        <a href="https://bityli.com/VDdkR">
          <SiLinkedin  size={30} className="FooterIcons"/> 
        </a>

        <a href="https://bityli.com/FYCvr">
          <SiInstagram  size={30} className="FooterIcons"/> 
        </a>

        <a href="https://bityli.com/VrZfm" className="whatsappImg">        
          <SiWhatsapp  size={30} className="FooterIcons"/> 
        </a>

      </div>

    </footer>
  )
};

export default Footer;