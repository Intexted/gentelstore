import React, { useContext, useState } from 'react';
import { Autoplay, Navigation } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import ProductCard from '../components/ProductCard';
import { t } from 'i18next';
import { MyContext } from '../context/MyContext';

function Brand() {
  const { Stores } = useContext(MyContext);
  const [slide, setSlide] = useState();

  return (
    <div className='category' id='category' style={{ marginTop: 20 }}>
      <div className='container' style={{ position: 'relative' }}>
        {/* <h2 className='title'>{t('Categories')} </h2> */}
        <div style={{ position: 'relative' }} className='category-slider'>
          <button className='banner-next'>
            <ion-icon name='chevron-forward-outline'></ion-icon>
          </button>
          <button className='banner-prev'>
            <ion-icon name='chevron-back-outline'></ion-icon>
          </button>
          <Swiper
            modules={[Navigation, Autoplay]}
            className='category-item-container'
            slidesPerView={4}
            spaceBetween={20}
            initialSlide={slide}
            navigation={{
              nextEl: '.banner-prev',
              prevEl: '.banner-next',
            }}
            breakpoints={{
              570: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 7,
              },

              1200: {
                slidesPerView: 10,
              },
            }}
          >
            {Stores?.map((b, i) => (
              <SwiperSlide
                key={i}
                onClick={() => {
                  setSlide(b?._id);
                }}
              >
                <div
                  className={`category-item ${
                    b?._id === slide ? 'active' : ''
                  }`}
                >
                  <div className='category-img-box'>
                    <img src={b?.image} alt='dress & frock' width='50' />
                  </div>
                  <div className='category-content-box'>
                    <h3 className='category-item-title'>{b?.name}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className='product-main' style={{ marginTop: 20 }}>
          <ProductCard store={slide} />
        </div>
      </div>
    </div>
  );
}

export default Brand;
