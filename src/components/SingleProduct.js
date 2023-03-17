import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MyContext } from '../context/MyContext';
import { useGetData } from '../hooks/getData';
import { useCountdown } from '../hooks/useCountdown';
import ProductCard from './ProductCard';

function SingleProduct() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { myCart, setPageControle, setCart } = useContext(MyContext);
  const { Products } = useGetData();
  const Product = Products.find((p) => p?._id === id);
  const [Timer, setTimer] = useState(
    new Date().getTime() + Math.random() * 1000000000 + 2000000000
  );
  const [days, hours, minutes, seconds] = useCountdown(Timer);

  const cart_add = ({ product, items = 1 }) => {
    let index = myCart?.findIndex((c) => c?.product?._id === product?._id);
    let new_cart = [...myCart];
    if (index >= 0) {
      new_cart = myCart?.filter((c) => c?.product?._id !== product?._id);
    } else {
      new_cart.push({ product, items });
      setPageControle((page) => ({ ...page, showCart: true }));
    }
    setCart(new_cart);
    localStorage.setItem(
      'cart',
      JSON?.stringify(
        new_cart?.map((i) => ({ product: i?.product?._id, items: i?.items }))
      )
    );
  };

  return (
    <div className='container' style={{ margin: '20px auto 80px' }}>
      <div className='product-featured'>
        <div className='showcase-wrapper has-scrollbar'>
          <div className='showcase-container'>
            {Product?.photos?.length > 0 && (
              <div className='showcase'>
                <Swiper
                  modules={[Navigation, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  className='showcase-banner'
                  style={{ direction: 'ltr' }}
                  // onSlideChange={() => console.log('slide change')}
                  // onSwiper={(swiper) => console.log(swiper)}

                  navigation={{
                    nextEl: '.next-2',
                    prevEl: '.prev-2',
                  }}
                >
                  {Product?.photos?.map((photo, i) => (
                    <SwiperSlide key={i}>
                      <img src={photo} className='showcase-img' />
                    </SwiperSlide>
                  ))}
                  <button className='banner-prev prev-2 ' style={{ left: 20 }}>
                    <ion-icon name='chevron-back-outline'></ion-icon>
                  </button>
                  <button className='banner-next next-2' style={{ right: 20 }}>
                    <ion-icon name='chevron-forward-outline'></ion-icon>
                  </button>
                </Swiper>

                <div className='showcase-content'>
                  <div className='showcase-rating'>
                    <ion-icon name='star'></ion-icon>
                    <ion-icon name='star'></ion-icon>
                    <ion-icon name='star'></ion-icon>
                    <ion-icon name='star-outline'></ion-icon>
                    <ion-icon name='star-outline'></ion-icon>
                  </div>

                  <a href='#'>
                    <h3 className='showcase-title'>{Product?.name}</h3>
                  </a>

                  <p className='showcase-desc'>{Product?.description}</p>

                  <div className='price-box'>
                    <p className='price'>{Product?.prix}</p>
                    <del>{+Product?.prix + Product?.prix / 10}</del>
                  </div>

                  <button
                    onClick={() => cart_add({ product: Product, items: 1 })}
                    className='add-cart-btn'
                  >
                    {t('add to cart')}
                  </button>

                  <div className='showcase-status'>
                    <div className='wrapper'>
                      <p>
                        already sold:{' '}
                        <b>{Math.floor(Product?.quantity * 1.25)}</b>
                      </p>

                      <p>
                        available: <b>{Product?.quantity}</b>
                      </p>
                    </div>

                    <div className='showcase-status-bar'></div>
                  </div>

                  <div className='countdown-box'>
                    <p className='countdown-desc'>
                      {t('Hurry Up! Offer ends in')}
                    </p>

                    <div className='countdown'>
                      <div className='countdown-content'>
                        <p className='display-number'>{days}</p>

                        <p className='display-text'>Days</p>
                      </div>

                      <div className='countdown-content'>
                        <p className='display-number'>{hours}</p>
                        <p className='display-text'>Hours</p>
                      </div>

                      <div className='countdown-content'>
                        <p className='display-number'>{minutes}</p>
                        <p className='display-text'>Min</p>
                      </div>

                      <div className='countdown-content'>
                        <p className='display-number'>{seconds}</p>
                        <p className='display-text'>Sec</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='product-main'>
        <div className='product-container'>
          <div className='container'>
            {/* SIDEBAR */}

            {/* <SideBar /> */}

            <div className='product-box'>
              {/* PRODUCT MINIMAL */}
              {/* <ProductMinimal /> */}
              {/* PRODUCT FEATURED */}
              {/* <SingleProduct /> */}
              {/* PRODUCT GRID */}
              <div className='product-main'>
                <h2 className='title'>{t('Products')} </h2>

                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
