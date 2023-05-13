import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);
const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const Slider = () => {
  return (
    <div style={{ padding: "30px 20px" }}>
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        spaceBetween={40}
        // slidesPerView="auto"
        breakpoints={{
          570: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },

          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((image, i) => (
          <SwiperSlide>
            <img
              src={`./images/image${i + 1}.jpeg`}
              alt="Image 1"
              height={500}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
