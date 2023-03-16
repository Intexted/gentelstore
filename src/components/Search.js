import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../context/MyContext';
import i18n, { t } from 'i18next';
import ProductCardMin from './ProductCardMin';

function Search() {
  const [search, setSearch] = useState('');
  const { PageControle, setPageControle, Products, Logo, wishes } =
    useContext(MyContext);

  return (
    <div className='header-main'>
      <div className='container'>
        <Link to='/' className='header-logo'>
          {Logo?.name}
          <img src={Logo?.img} alt='logo' height='36' />
        </Link>

        <div
          className={`header-search-container ${
            PageControle.showSearch ? 'active' : ''
          }`}
        >
        lljlkjkjjkj
          <input
            type='search'
            name='search'
            className='search-field'
            placeholder={t('Enter your product name...')}
            onFocus={() => {
              if (!PageControle.showSearch)
                setPageControle((page) => ({ ...page, showSearch: true }));
            }}
            onKeyUp={(v) => {
              setSearch(v.target.value);
              if (!PageControle.showSearch)
                setPageControle((page) => ({ ...page, showSearch: true }));
            }}
          />

          <button className='search-btn'>
            <ion-icon name='search-outline'></ion-icon>
          </button>
          {search && (
            <div
              className='product-minimal has-scrollbar'
              style={{
                width: '100%',
                position: 'absolute',
                zIndex: 99,
                background: 'white',
                padding: 20,
                borderRadius: 10,
                top: '120%',
                maxHeight: 400,
                overflow: 'auto',
              }}
            >
              <div className='product-showcase'>
                {/* <h2 className='title'>New Arrivals</h2> */}
                {/* <div className='showcase-wrapper'> */}
                <div className='showcase-container'>
                  {Products?.filter((p) =>
                    p?.name?.toLowerCase().includes(search?.toLowerCase())
                  )?.map((p, i) => (
                    <ProductCardMin product={p} key={i} />
                  ))}
                  {/* </div> */}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='header-user-actions'>
          {/* <button className='action-btn'>
          <ion-icon name='person-outline'></ion-icon>
        </button> */}

          <button className='action-btn'>
            <ion-icon name='heart-outline'></ion-icon>
            <span className='count'>{wishes?.length || 0}</span>
          </button>

          <button
            className='action-btn'
            onClick={() => {
              setPageControle((page) => ({ ...page, showWishes: true }));
            }}
          >
            <ion-icon name='bag-handle-outline'></ion-icon>
            <span className='count'>0</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
