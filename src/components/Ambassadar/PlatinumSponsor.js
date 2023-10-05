import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Ambassadar.css";

const PlatinumSponsor = () => {
  return (
    <>
      {" "}
      <br />
      <br />
      <br />
      <center>
        <img
          className="title"
          src="https://see.fontimg.com/api/renderfont4/A4lL/eyJyIjoiZnMiLCJoIjoxMDYsInciOjE2MjUsImZzIjo2NSwiZmdjIjoiI0QxRDFEMSIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/UGxhdGludW0gVGlFUg/star-jedi-hollow.png"
          alt=""
          srcset=""
        />
      </center>
      <div className="recommended">
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          slidesPerGroup={1}
          loop={true}
          speed={700}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="recommendedmovie">
              <img
                src="https://413strong.org/wp-content/uploads/2018/10/Table-Sponsors-Poster-_-Final.png"
                alt=""
              />
              {/* <h6>Kaduva</h6>
            <span>Action/Drama</span> */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="recommendedmovie">
              <img
                src="https://413strong.org/wp-content/uploads/2018/10/Table-Sponsors-Poster-_-Final.png"
                alt=""
              />
              {/* <h6>Kaduva</h6>
            <span>Action/Drama</span> */}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default PlatinumSponsor;
