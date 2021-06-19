import React from "react";
import "./styles.scss";
import SlideCarousel from "../SlideCarousel";

import edt1 from  './../../assets/images/edicoes/ed1.svg';
import edt2 from  './../../assets/images/edicoes/ed2.svg';
import edt3 from  './../../assets/images/edicoes/ed3.png';
import edt4 from  './../../assets/images/edicoes/ed4.svg';

import cart1 from './../../assets/images/cartoes/cart1.svg';
import cart2 from './../../assets/images/cartoes/cart2.svg';
import cart3 from './../../assets/images/cartoes/cart3.svg';

import pub1 from './../../assets/images/publicidade/pub1.svg';
import pub2 from './../../assets/images/publicidade/pub2.svg';
import pub3 from './../../assets/images/publicidade/pub3.svg';

import indV1 from  './../../assets/images/indVisual/ind1.svg';
import indV2 from './../../assets/images/indVisual/ind2.svg';
import indV3 from './../../assets/images/indVisual/ind3.svg';

import Ui1 from './../../assets/images/UIDesign/rec1.svg';
import Ui2 from './../../assets/images/UIDesign/rec2.svg';
import Ui3 from  './../../assets/images/UIDesign/rec1.svg';

const edicoes = new Array(edt1, edt2, edt3, edt4);
const cartoes = new Array(cart1, cart3, cart1, cart2);
const publicidade = new Array(pub1, pub2, pub3, pub1);
const idVisual = new Array(indV1, indV2, indV3, indV1);
const uiDesign = new Array(Ui1, Ui2, Ui3, Ui1);

const titles = [
  'Edições',
  'Cartões',
  'Publicidade',
  'Identidade Visual',
  'UI Design'];

const slides = [
  edicoes,
  cartoes,
  publicidade,
  idVisual,
  uiDesign
];

const MainPage = () =>{
  return (    
    <main className="MainPage">
      {slides.map((item, index) =>{
        return (
          <SlideCarousel title={titles[index]} imgs={slides[index]}/>
        )
      })};
    </main>
  );
};

export default MainPage;