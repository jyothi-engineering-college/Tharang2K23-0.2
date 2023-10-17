import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Ambassadar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PlatinumSponsor = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="sponsorship-container">
      

      <div className="sponsorship-carousel">
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
            <div className="sponsorship-slide">
              <img
                className="img-fluid"
                src="https://413strong.org/wp-content/uploads/2018/10/Table-Sponsors-Poster-_-Final.png"
                alt=""
              />
              {/* You can add sponsor details or links here */}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sponsorship-slide">
              <img
                className="img-fluid"
                src="https://413strong.org/wp-content/uploads/2018/10/Table-Sponsors-Poster-_-Final.png"
                alt=""
              />
              {/* You can add sponsor details or links here */}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PlatinumSponsor;
