import { SiWhatsapp, SiLinkedin, SiInstagram, SiGmail } from 'react-icons/si'
import "./styles.scss"

const Footer = () => {
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

        <a href="https://bityli.com/VrZfm">        
          <SiWhatsapp  size={30} className="FooterIcons"/> 
        </a>
        
      </div>

      <h5>
        Ester C. Alencar | Licensed under &nbsp;
        <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style={{display:'inline-block'}}>
           CC BY-NC-ND 4.0
        </a>
      </h5>

      <h6>Powered by
         <a href="https://bityli.com/PMsMd" style={{textDecoration:'none'}}> Werik Santos </a>           
      </h6> 

      <div  id="imgs-row">
        <img id="rights-img" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"></img>
        <img id="rights-img" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></img>
        <img id="rights-img" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"></img>
        <img id="rights-img" src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"></img>
      </div>

    </footer>
  )
};

export default Footer;