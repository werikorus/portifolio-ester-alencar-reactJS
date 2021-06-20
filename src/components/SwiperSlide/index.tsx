import { Swiper, SwiperSlide } from 'swiper/react';
import ImagemModal from "../ImagemModal/index.jsx";
import 'swiper/swiper.scss';
import Item from "./Item.js";


interface SwiperSliderProps{
  title?: string;  
  imgs: Array<string>;
}

const SwiperSlider: React.FC<SwiperSliderProps> = (props) => {
  return(
    <>
    <h1>{props.title}</h1> 
    <section className="sec-carroucel">      
      <div className="div-child-section">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {props.imgs.map((item, index) => {
            if (props.imgs[index]!==null){
              return (
                  <SwiperSlide>
                      <Item>
                        <ImagemModal
                          smallImg={props.imgs[index]}
                          largeImg={props.imgs[index]}
                        />
                      </Item>
                  </SwiperSlide>
              )
            }
        })}
        ...
    </Swiper>
      </div>
    </section>
    <div className="line-break"></div>
  </>
  );

}

export default SwiperSlider;
