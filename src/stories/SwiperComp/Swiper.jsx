import React from "react";
import "./swiper.scss";
import PropTypes from "prop-types";
import SwiperImg from "../assets/swiperImg.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
// import { Pagination } from "swiper";
// import required modules
import { Navigation } from "swiper";


export const SwiperComp = ({
    options,
    slidesPerView,spaceBetween,
  
}) => {
    return (
        <div className="swiper-comp">
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={spaceBetween}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {options.map( (slide,index) => {
                    return(
                        <SwiperSlide key={index}>
                            <div className="swiperImg" >
                                <img src={slide.slide}/>
                            </div>
                        </SwiperSlide>
                    );
                })}
        
        
            </Swiper>
        </div>
    );
};
SwiperComp.propTypes = {
    /**
   * Is this the principal call to action on the page?
   */
    // SingleSelectDropdown: PropTypes.bool,
    /**
   * What background color to use
   */
    // backgroundColor: PropTypes.string,
    /**
   * How large should the button be?
   */
    /**
   * Button contents
   */
    options: PropTypes.array.isRequired,
    /**
   * Optional click handler
   */
    onClick: PropTypes.func,
};
SwiperComp.defaultProps = {
    options:[
        {
            slide:SwiperImg
        },  {
            slide:SwiperImg
        }
    ],slidesPerView:4,
    spaceBetween:20,
};
