import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MyContext } from '../context/MyContext';
import i18n, { t } from 'i18next';

function MobileMenu() {
  const [ShowLng, setShowLng] = useState(false);
  const { PageControle, setPageControle, Products, social, Logo, wishes } =
    useContext(MyContext);

  const change_lang = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };
  return (
    <nav
      className={`mobile-navigation-menu has-scrollbar ${
        PageControle?.showMenu ? 'active' : ''
      }`}
    >
      <div className='menu-top'>
        <h2 className='menu-title'>{t('Menu')}</h2>

        <button
          className='menu-close-btn'
          onClick={() =>
            setPageControle((page) => ({ ...page, showMenu: false }))
          }
        >
          <ion-icon name='close-outline'></ion-icon>
        </button>
      </div>

      <ul className='mobile-menu-category-list'>
        <li className='menu-category'>
          <NavLink className='menu-title' to={'/'}>
            {t('Home')}
          </NavLink>
        </li>

        <li className='menu-category'>
          <NavLink to={'category'} className='menu-title'>
            {t('Categories')}
          </NavLink>
          {/* <CategorysHover /> */}
        </li>

        <li className='menu-category'>
          <NavLink to={'brand'} className='menu-title'>
            {t('Brands')}
          </NavLink>
        </li>
        <li className='menu-category'>
          <NavLink to={'/service'} className='menu-title'>
            {t('Services')}
          </NavLink>
        </li>
      </ul>

      <div className='menu-bottom'>
        <ul className='menu-category-list'>
          <li className='menu-category'>
            <button
              className={`accordion-menu  ${ShowLng ? 'active' : ''}`}
              onClick={() => setShowLng((l) => !l)}
            >
              <p className='menu-title'>Language</p>

              <div className='caret-back'>
                <ion-icon name='caret-back-outline'></ion-icon>
              </div>
            </button>

            <ul className={`submenu-category-list  ${ShowLng ? 'active' : ''}`}>
              <li
                className={`submenu-category ${
                  i18n.language === 'en' ? 'active' : ''
                }`}
                onClick={() => {
                  change_lang('en');
                  setShowLng(false);
                }}
              >
                <button className='submenu-title'>English</button>
              </li>

              <li
                className={`submenu-category ${
                  i18n.language === 'fr' ? 'active' : ''
                }`}
                onClick={() => {
                  change_lang('fr');
                  setShowLng(false);
                }}
              >
                <button className='submenu-title'>Francais</button>
              </li>

              <li
                className={`submenu-category ${
                  i18n.language === 'ar' ? 'active' : ''
                }`}
                onClick={() => {
                  change_lang('ar');
                  setShowLng(false);
                }}
              >
                <button className='submenu-title'>العربية</button>
              </li>
            </ul>
          </li>
        </ul>

        <ul className='menu-social-container'>
          <li>
            <a href={social?.facebook} className='social-link'>
              <ion-icon name='logo-facebook'></ion-icon>
            </a>
          </li>

          <li>
            <a href={social?.twitter} className='social-link'>
              <ion-icon name='logo-twitter'></ion-icon>
            </a>
          </li>

          <li>
            <a href={social?.instagram} className='social-link'>
              <ion-icon name='logo-instagram'></ion-icon>
            </a>
          </li>

          <li>
            <a href={social?.linkedin} className='social-link'>
              <ion-icon name='logo-linkedin'></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileMenu;
