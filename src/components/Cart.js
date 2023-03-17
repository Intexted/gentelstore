import React, { useContext, useEffect, useState } from 'react';
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

  const [Total, setTotal] = useState(0);

  useEffect(() => {
    if (myCart?.length > 0) {
      let total = 0;
      myCart?.map((i) => (total += +i?.product?.prix * i?.items));
      setTotal(total);
    }
  }, [myCart]);
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
        <div
          className='product-showcase has-scrollbar '
          style={{
            overflow: 'auto',
            maxHeight: 'calc( 100vh - 180px)',
          }}
        >
          <div className='showcase-container '>
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
        {myCart?.length > 0 && (
          <div
            className='menu-social-container'
            style={{ boxShadow: '0 -10px  10px hsla(0, 0%, 0%, 0.1)' }}
          >
            <div style={{ flex: 1 }}>
              <h4
                className='menu-title'
                style={{
                  borderBottom: '2px solid var(--cultured)',
                  width: '100%',
                  paddingBottom: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                {t('Total')} :<span style={{ fontSize: 20 }}> {Total} دم</span>
              </h4>
              <button
                className='banner-btn'
                style={{
                  width: '100%',
                  padding: 10,
                  marginTop: 5,
                  color: '#fff',
                  borderRadius: 5,

                  fontSize: 16,
                }}
                onClick={() => {
                  setPageControle({
                    ...PageControle,
                    showCart: false,
                    showOrder: true,
                  });
                }}
              >
                شراء الان
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Cart;
