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
      <h1>estercarvalhodealencar@gmail.com</h1>


      <div className="footerIcons-div">

        <a href="https://www.linkedin.com/in/ester-carvalho-de-alencar-b41038191">
          <SiLinkedin  size={30} className="FooterIcons"/> 
        </a>

        <a href="https://www.instagram.com/ester_artsss/?igshid=uvll1xw0lrhm">
           <SiInstagram  size={30} className="FooterIcons"/> 
        </a>

        <a href="https://api.whatsapp.com/send?phone=556392021394&text=Ol%C3%A1%2C%20Ester!" className="whatsappImg">        
          <SiWhatsapp  size={30} className="FooterIcons"/> 
        </a>

      </div>

    </footer>
  )
};

export default Footer;