import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Ambassadar.css";
import "bootstrap/dist/css/bootstrap.min.css";
const GoldSponsor = () => {
  SwiperCore.use([Autoplay]);

   return (
     <>
       {" "}
       <center>
         <img
           className="title img-fluid"
           src="https://see.fontimg.com/api/renderfont4/A4lL/eyJyIjoiZnMiLCJoIjoxMDYsInciOjE2MjUsImZzIjo2NSwiZmdjIjoiI0U5QjQyNSIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/R29MRCBUaUVS/star-jedi-hollow.png"
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
               <img className="img-fluid"
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

export default GoldSponsor;
