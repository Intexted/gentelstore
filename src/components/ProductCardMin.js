import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../context/MyContext';

function ProductCardMin({
  product,
  onDelete = () => {},
  items,
  cart_add = () => {},
  close = true,
}) {
  const { Products, Stores } = useContext(MyContext);
  const del = +product?.prix + product?.prix / 10 || 0;
  return (
    <div className='showcase' style={{ position: 'relative' }}>
      <Link to={`product/${product?._id}`} className='showcase-img-box'>
        <img
          src={product?.photos[0]}
          alt={product?.name}
          width='70'
          className='showcase-img'
        />
      </Link>

      <div className='showcase-content'>
        <Link to={`product/${product?._id}`} className='showcase-category'>
          {Stores?.find((c) => c?._id === product?.store)?.name}
        </Link>
        <Link to={`product/${product?._id}`}>
          <h4 className='showcase-title'>{product?.name}</h4>
        </Link>

        <div className='price-box'>
          <p className='price'>{product?.prix}</p>
          <del>{del}</del>
        </div>
        {items && (
          <div style={{ display: 'flex', color: 'var(--salmon-pink)' }}>
            <div style={{ margin: 'auto' }}></div>
            <button
              onClick={() =>
                cart_add({
                  product,
                  items: items - 1 > 1 ? items - 1 : 1,
                })
              }
            >
              <ion-icon name='remove-outline'></ion-icon>
            </button>
            <div style={{ width: 20, textAlign: 'center' }}>{items}</div>
            <button
              onClick={() =>
                cart_add({
                  product,
                  items: items + 1,
                })
              }
            >
              <ion-icon name='add-outline'></ion-icon>
            </button>
          </div>
        )}

        {close && (
          <button
            style={{
              position: 'absolute',
              left: 5,
              top: 5,
              padding: 5,
              fontSize: 20,
              color: 'var(--salmon-pink)',
            }}
            onClick={() => onDelete(product)}
          >
            <ion-icon name='close-outline'></ion-icon>
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCardMin;
