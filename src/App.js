import React, { useContext, useState } from 'react';
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import { MyContext } from './context/MyContext';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import SingleProduct from './components/SingleProduct';

import Category from './components/Category';
import Notification from './components/Notification';
import Modale from './components/Modale';
import { transtlation } from './hooks/translation';
import Service from './components/Service';
import Brand from './components/Brand';
import Splash from './components/Splash';

function App() {
  const { PageControle, setPageControle, Products } = useContext(MyContext);
  const [ShowNotif, setShowNotif] = useState(true);
  transtlation({
    en: {
      translation: {
        'Enter your product name...': 'Enter your product name...',
        Home: 'Home',
        Services: 'Services',
        Categories: 'Categories',
        Brands: 'Brands',
        Menu: 'Menu',
        Products: 'Products',
        Wishes: 'Wishes',
        'best products': 'best products',
      },
    },
    fr: {
      translation: {
        'Enter your product name...': 'Entrez le nom de votre produit...',
        Home: 'Accueil',
        Services: 'Services',
        Categories: 'Catégories',
        Brands: 'Marques',
        Menu: 'Menu',
        Products: 'Produits',
        Wishes: 'Préféré',
        'best products': 'meilleurs produits',
      },
    },
    ar: {
      translation: {
        'Enter your product name...': 'أدخل اسم المنتج الخاص بك ...',
        Home: 'الرئيسية',
        Services: 'خدمات',
        Categories: 'فئات',
        Brands: 'العلامات التجارية',
        Menu: 'القائمة',
        Products: 'منتجات',
        Wishes: 'المفضلة',
        'best products': 'أفضل المنتجات',
      },
    },
  });

  if (!Products || Products.length <= 0) {
    return <Splash />;
  }
  return (
    <div className='App'>
      {(PageControle.showMenu ||
        PageControle.showSearch ||
        PageControle.showWishes ||
        PageControle.showCategory) && (
        <div
          className='overlay active'
          onClick={() => {
            setPageControle({
              showMenu: false,
              showCategory: false,
              showSearch: false,
            });
          }}
        ></div>
      )}

      {/* <Modale /> */}
      {ShowNotif && <Notification setShowNotif={setShowNotif} />}

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/product' element={<SingleProduct />} />
          <Route path='/service' element={<Service />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='/*' element={<Category />} />
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
