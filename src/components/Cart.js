import React, { useContext, useEffect } from 'react';
import ProductCardMin from './ProductCardMin';
import i18n, { t } from 'i18next';
import { MyContext } from '../context/MyContext';

function Cart() {
  const { PageControle, setPageControle, Products, myCart, setCart } =
    useContext(MyContext);
  const cart_action = (p) => {
    let new_cart = myCart?.filter((c) => c?.product?._id !== p?._id);
    setCart(new_cart);
    localStorage.setItem('cart', JSON?.stringify(new_cart?.map((w) => w?._id)));
  };

  const cart_add = ({ product, items = 1 }) => {
    let index = myCart?.findIndex((c) => c?.product?._id === product?._id);
    let new_cart = [...myCart];
    new_cart[index] = { product, items };
    setCart(new_cart);
    localStorage.setItem(
      'cart',
      JSON?.stringify(
        new_cart?.map((i) => ({ product: i?.product?._id, items: i?.items }))
      )
    );
  };
  return (
    <nav
      className={`mobile-navigation-menu has-scrollbar ${
        PageControle?.showCart ? 'active' : ''
      }`}
    >
      <div className='menu-top'>
        <h2 className='menu-title'>{t('Cart')}</h2>

        <button
          className='menu-close-btn'
          onClick={() =>
            setPageControle((page) => ({ ...page, showCart: false }))
          }
        >
          <ion-icon name='close-outline'></ion-icon>
        </button>
      </div>

      <div
        className='product-minimal has-scrollbar'
        style={{
          zIndex: 99,
          background: 'white',
          borderRadius: 10,
          overflow: 'auto',
        }}
      >
        <div className='product-showcase'>
          <div className='showcase-container'>
            {myCart?.map((c, i) => (
              <ProductCardMin
                product={c.product}
                key={i}
                onDelete={cart_action}
                cart_add={cart_add}
                cart={true}
                items={c?.items}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Cart;
