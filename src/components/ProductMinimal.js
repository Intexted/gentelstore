import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import Category from '../pages/Category';

function ProductMinimal() {
  const { Categorys, Products } = useContext(MyContext);
  return (
    <div className='container'>
      <div className='product-minimal'>
        <div className='product-showcase'>
          <h2 className='title'>New Arrivals</h2>
          {/* <div className='showcase-wrapper'> */}
          <div className='showcase-container'>
            {Products?.slice(0, 4)?.map((p, i) => (
              <div className='showcase' key={i}>
                <a href='#' className='showcase-img-box'>
                  <img
                    src={p?.photos[0]}
                    alt={p?.name}
                    width='70'
                    className='showcase-img'
                  />
                </a>

                <div className='showcase-content'>
                  <a href='#'>
                    <h4 className='showcase-title'>{p?.name}</h4>
                  </a>

                  <a href='#' className='showcase-category'>
                    {p?.category}
                  </a>

                  <div className='price-box'>
                    <p className='price'>{p?.prix}</p>
                    <del>{+p?.prix + p?.prix / 10}</del>
                  </div>
                </div>
              </div>
            ))}
            {/* </div> */}
          </div>
        </div>
        <div className='product-showcase'>
          <h2 className='title'>Trending</h2>
          {/* <div className='showcase-wrapper'> */}
          <div className='showcase-container'>
            {Products?.slice(0, 4)?.map((p, i) => (
              <div className='showcase' key={i}>
                <a href='#' className='showcase-img-box'>
                  <img
                    src={p?.photo[0]}
                    alt={p?.title}
                    width='70'
                    className='showcase-img'
                  />
                </a>

                <div className='showcase-content'>
                  <a href='#'>
                    <h4 className='showcase-title'>{p?.title}</h4>
                  </a>

                  <a href='#' className='showcase-category'>
                    {Categorys?.find((c) => c?._id === p?.category)?.name}
                  </a>

                  <div className='price-box'>
                    <p className='price'>{p?.price}</p>
                    <del>{p?.last_price}</del>
                  </div>
                </div>
              </div>
            ))}
            {/* </div> */}
          </div>
        </div>
        <div className='product-showcase'>
          <h2 className='title'>New Arrivals</h2>
          {/* <div className='showcase-wrapper'> */}
          <div className='showcase-container'>
            {Products?.slice(0, 4)?.map((p, i) => (
              <div className='showcase' key={i}>
                <a href='#' className='showcase-img-box'>
                  <img
                    src={p?.photo[0]}
                    alt={p?.title}
                    width='70'
                    className='showcase-img'
                  />
                </a>

                <div className='showcase-content'>
                  <a href='#'>
                    <h4 className='showcase-title'>{p?.title}</h4>
                  </a>

                  <a href='#' className='showcase-category'>
                    {p?.category}
                  </a>

                  <div className='price-box'>
                    <p className='price'>{p?.price}</p>
                    <del>{p?.last_price}</del>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default ProductMinimal;
