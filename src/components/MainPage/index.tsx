import React, { useState } from "react";
import "./styles.css";
import "./imagens.js"
import ImagesCarroucel from "../ImagesCarroucel";

import edt1 from  './../../assets/images/edicoes/ed1.svg';
import edt2 from  './../../assets/images/edicoes/ed2.svg';
import edt3 from  './../../assets/images/edicoes/ed3.svg';

import cart1 from './../../assets/images/cartoes/cart1.svg';
import cart2 from './../../assets/images/cartoes/cart2.svg';
import cart3 from './../../assets/images/cartoes/cart3.svg';

import pub1 from './../../assets/images/publicidade/pub1.svg';
import pub2 from './../../assets/images/publicidade/pub2.svg';
import pub3 from './../../assets/images/publicidade/pub3.svg';

const edicoes = new Array(edt3, edt2, edt3);
const cartoes = new Array(cart1, cart2, cart3);
const publicidade = new Array(pub1, pub2, pub3);


const MainPage = () =>{
  return (
    <main id="MainPage">
      <ImagesCarroucel title="Edições" imgs={edicoes}/>
      <ImagesCarroucel title="Cartões" imgs={cartoes}/>
      <ImagesCarroucel title="Publicidade" imgs={publicidade}/>
      {/* <ImagesCarroucel title={indVisual[0]} imgs={indVisual}/>
      <ImagesCarroucel title={uiDesign[0]} imgs={uiDesign}/> */}
      
    </main>
  );
};

export default MainPage;