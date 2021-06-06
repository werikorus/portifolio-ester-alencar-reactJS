import { SiWhatsapp, SiLinkedin, SiInstagram, SiGmail } from 'react-icons/si';
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
      
      <h5>Copyright © Ester C. Alencar | Todos os direitos reservados</h5>
      <h6>Desenvolvido por <a href="https://bityli.com/PMsMd" style={{textDecoration:'none'}}> Werik Santos </a></h6> 
    </footer>
  )
};

export default Footer;