import React from "react";
import ImagesCarroucel from "../ImagesCarroucel";

import loboneve1 from "./../../assets/images/edicoes/loboneve1.png";
import loboneve2 from "./../../assets/images/edicoes/loboneve2.png";
import astronauta from "./../../assets/images/edicoes/astronauta.png";

import edt1 from "./../../assets/images/edicoes/ed1.svg";

import cartao1 from "./../../assets/images/cartoes/WERIKORUS.png";
import cartao2 from "./../../assets/images/cartoes/creativedesign.png";

import pub1 from "./../../assets/images/publicidade/pub1.svg";
import pub2 from "./../../assets/images/publicidade/pub2.svg";
import pub3 from "./../../assets/images/publicidade/pub3.svg";

import rec1 from "./../../assets/images/UIDesign/rec1.svg";
import rec2 from "./../../assets/images/UIDesign/rec2.svg";

import ind1 from "./../../assets/images/ind-visual/ind1.svg";


import "./styles.css";
import "./ImagensList.js";

const MainPage = () =>{
  return (
    <main id="MainPage">
      <ImagesCarroucel 
        title = "Edições"
        img1 = {loboneve1}
        img2 = {astronauta}
        img3 = {edt1}
      />
    
      <ImagesCarroucel 
        title= "Cartões de Visita"
        img1= {cartao1}
        img2= {cartao2}
        img3= {cartao1}
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