import React, { useContext } from 'react';
import ProductCardMin from './ProductCardMin';
import i18n, { t } from 'i18next';
import { MyContext } from '../context/MyContext';

function Wishes() {
  const { PageControle, setPageControle, Products, social, Logo } =
    useContext(MyContext);
  return (
    <nav
      className={`mobile-navigation-menu has-scrollbar ${
        PageControle?.showWishes ? 'active' : ''
      }`}
    >
      <div className='menu-top'>
        <h2 className='menu-title'>{t('Wishes')}</h2>

        <button
          className='menu-close-btn'
          onClick={() =>
            setPageControle((page) => ({ ...page, showWishes: false }))
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
            {Products?.map((p, i) => (
              <ProductCardMin product={p} key={i} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Wishes;
