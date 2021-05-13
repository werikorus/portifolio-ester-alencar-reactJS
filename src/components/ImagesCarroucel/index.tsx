import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css'

import "./styles.css";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

interface CarroucelProps{
  title: string;
  img1 ?:string;
  img2 ?:string;
  img3 ?:string;
  img4 ?:string;
  img5 ?:string;
}

const ImagesCarroucel: React.FC<CarroucelProps> = (props) => {
  return(
    <>
      <h1>{props.title}</h1>
      <section className="sec-carroucel">
        <div className="div-child-section">

        <Carousel breakPoints={breakPoints} isRTL={false}>
          <Item ClassName="item1">
            <img src={props.img1} id="img" alt=""/>
          </Item>
          
          <Item>
            <img src={props.img2} id="img" alt=""/>
          </Item>
         
          <Item>
              <img src={props.img3} id="img"  alt=""/>
          </Item>

          <Item>
            <img src={props.img4} id="img" alt=""/>
          </Item>
         
          <Item>
              <img src={props.img5} id="img"  alt=""/>
          </Item>

        </Carousel>

        </div>
      </section>
      <div className="line-break"></div>
    </>
  );
}

export default ImagesCarroucel;