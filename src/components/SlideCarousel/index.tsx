import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-slideshow-image/dist/styles.css';

import "./styles.css";
import ImagemModal from "../ImagemModal/index.jsx";

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

const SlideCarousel: React.FC<CarroucelProps> = (props) => {
  return(
    <>
      <h1>{props.title}</h1> 
      <section className="sec-carroucel">      
        <div className="div-child-section">
          <Carousel breakPoints={breakPoints} isRTL={false}>
            {props.imgs.map((item, index) => {
               if (props.imgs[index]!=''){
                  return (
                    <Item>
                      <ImagemModal
                        smallImg={props.imgs[index]}
                        largeImg={props.imgs[index]}
                      />
                    </Item>
                  )
               } 
            })}
          </Carousel>
        </div>
      </section>
      <div className="line-break"></div>
    </>
  );
}

export default SlideCarousel;