import React from "react";
import ImagesCarroucel from "../ImagesCarroucel";

import edt1 from "./../../assets/images/edicoes/ed1.svg";
import edt2 from "./../../assets/images/edicoes/ed2.svg";
import edt3 from "./../../assets/images/edicoes/ed3.svg";

import cartao1 from "./../../assets/images/cartoes/cart1.svg";
import cartao2 from "./../../assets/images/cartoes/cart2.svg";
import cartao3 from "./../../assets/images/cartoes/cart3.svg";

import pub1 from "./../../assets/images/publicidade/pub1.svg";
import pub2 from "./../../assets/images/publicidade/pub2.svg";
import pub3 from "./../../assets/images/publicidade/pub3.svg";

import rec1 from "./../../assets/images/UIDesign/rec1.svg";
import rec2 from "./../../assets/images/UIDesign/rec2.svg";

import ind1 from "./../../assets/images/ind-visual/ind1.svg";


import "./styles.css";

import BootstrapGallery from "../BootstrapGallery";

const MainPage = () =>{
  return (
    <main id="MainPage">
      {/* <BootstrapGallery/> */}

      <ImagesCarroucel 
        title = "Edições"
        img1 = {edt1}
        img2 = {edt2}
        img3 = {edt3}
      />
    
      <ImagesCarroucel 
        title= "Cartões de Visita"
        img1= {cartao1}
        img2= {cartao3}
        img3= {cartao2}
      />
      
      <ImagesCarroucel 
        title= "Publicidade"
        img1= {pub1}
        img2= {pub2}
        img3= {pub3}
      />

      <ImagesCarroucel 
        title= "Identidade Visual"
        img1= {ind1}
        img2= {ind1}
        img3= {ind1}
      />

      <ImagesCarroucel 
        title= "UI Design"
        img1= {rec1}
        img2= {rec2}
        img3= {rec1}
      />
      
    </main>
  );
};

export default MainPage;