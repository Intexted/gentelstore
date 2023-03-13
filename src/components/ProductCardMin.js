import React from 'react';

function ProductCardMin({ product }) {
  return (
    <div className='showcase' style={{ position: 'relative' }}>
      <a href='#' className='showcase-img-box'>
        <img
          src={product?.photos[0]}
          alt={product?.name}
          width='70'
          className='showcase-img'
        />
      </a>

      <div className='showcase-content'>
        <a href='#'>
          <h4 className='showcase-title'>{product?.name}</h4>
        </a>

        <a href='#' className='showcase-category'>
          {product?.category}
        </a>

        <div className='price-box'>
          <p className='price'>{product?.prix}</p>
          <del>{+product?.prix + product?.prix / 10}</del>
        </div>
        <button
          style={{ position: 'absolute', left: 5, bottom: 5, padding: 5 }}
        >
          <ion-icon name='close-outline'></ion-icon>
        </button>
      </div>
    </div>
  );
}

export default ProductCardMin;
