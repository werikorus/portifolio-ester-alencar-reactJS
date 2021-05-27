import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css'

import img1 from './../../assets/images/cartoes/cart1.svg';

import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

interface CarroucelProps{
  title: string;
  imgs: Array<string>;
}

const ImagesCarroucel: React.FC<CarroucelProps> = (props) => {
  return(
    <>
      <h1>{props.title}</h1>
      <section className="sec-carroucel">
        <div className="div-child-section">
          <Carousel breakPoints={breakPoints} isRTL={false}>
            {props.imgs.map((item, index) => {
              return (
                <Item>
                  <img src={props.imgs[index]} id="img" alt=""/>
                </Item>
              )
            })}
          </Carousel>
        </div>
      </section>
      <div className="line-break"></div>
    </>
  );
}

export default ImagesCarroucel;