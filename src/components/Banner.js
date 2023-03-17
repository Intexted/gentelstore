import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation } from 'swiper';
import { Link } from 'react-router-dom';
import { MyContext } from '../context/MyContext';

function Banner() {
  const { sliders } = useContext(MyContext);

  // const sliders = [
  //   {
  //     img: '/images/products/shirt-1.png',
  //     subtitle: 'Trending item',
  //     title: "Women's latest fashion sale",
  //     message: ' starting at  20.00 dollar',
  //     url: '/',
  //   },
  //   {
  //     img: '/images/apple-watch-pcq.png',
  //     subtitle: 'Trending accessories',
  //     title: 'Modern sunglasses',
  //     message: ' starting at  20.00 dollar',
  //     url: '/',
  //   },
  //   {
  //     img: '/images/sports-1.png',
  //     subtitle: 'Sale Offer',
  //     title: 'New fashion summer sale',
  //     message: ' starting at  20.00 dollar',
  //     url: '/',
  //   },
  //   {
  //     img: '/images/shampoo.png',
  //     subtitle: 'Sale Offer',
  //     title: 'New fashion summer sale',
  //     message: ' starting at  20.00 dollar',
  //     url: '/',
  //   },
  //   {
  //     img: '/images/clothes-3.png',
  //     subtitle: 'Sale Offer',
  //     title: 'New fashion summer sale',
  //     message: ' starting at  20.00 dollar',
  //     url: '/',
  //   },
  // ];
  return (
    <div className='banner'>
      <div className='container' style={{ position: 'relative' }}>
        {/* <div className='slider-container has-scrollbar'> */}
        <button className='banner-prev prev-2 '>
          <ion-icon name='chevron-back-outline'></ion-icon>
        </button>
        <button className='banner-next next-2'>
          <ion-icon name='chevron-forward-outline'></ion-icon>
        </button>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          className='slider-container'
          navigation={{
            nextEl: '.next-2',
            prevEl: '.prev-2',
          }}
        >
          {sliders?.map((s, i) => (
            <SwiperSlide key={i} className='slider-item'>
              <img src={s?.img} alt={s?.title} className='banner-img' />

              <div className='banner-content'>
                <p className='banner-subtitle'>{s?.subtitle}</p>

                <h2 className='banner-title'>{s?.title}</h2>

                <p className='banner-text'>{s?.message}</p>

                <Link to={s?.url} className='banner-btn'>
                  شراء الان
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Banner;
