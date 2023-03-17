import React, { useContext, useEffect } from 'react';
import ProductCardMin from './ProductCardMin';
import i18n, { t } from 'i18next';
import { MyContext } from '../context/MyContext';

function Wishes() {
  const { PageControle, setPageControle, Products, wishes, setWishes } =
    useContext(MyContext);
  const wishes_action = (p) => {
    let new_wishes = wishes?.filter((w) => w?._id !== p?._id);
    setWishes(new_wishes);
    localStorage.setItem(
      'wishes',
      JSON?.stringify(new_wishes?.map((w) => w?._id))
    );
  };
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
        <div
          className='product-showcase has-scrollbar'
          style={{
            overflow: 'auto',
            maxHeight: 'calc( 100vh - 80px)',
          }}
        >
          <div className='showcase-container'>
            {wishes?.map((p, i) => (
              <ProductCardMin product={p} key={i} onDelete={wishes_action} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Wishes;
