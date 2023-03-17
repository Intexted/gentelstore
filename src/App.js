import React, { useContext, useState } from 'react';
import './App.css';

import Header from './components/Header';
import Main from './pages/Main';
import { MyContext } from './context/MyContext';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import SingleProduct from './pages/SingleProduct';

import Category from './pages/Category';
import Notification from './components/Notification';
import Modale from './components/Modale';
import { transtlation } from './hooks/translation';
import Service from './pages/Service';
import Brand from './pages/Brand';
import Splash from './components/Splash';
import ScrollToTop from './components/scrollToTop';
import Order from './components/Order';

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
        Cart: 'Shopping cart',
        Total: 'Total',
        'add to cart': 'add to cart',
        'Hurry Up! Offer ends in': 'Hurry Up! Offer ends in:',
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
        Cart: 'Panier',
        Total: 'Total',
        'add to cart': 'Ajouter au panier',
        'Hurry Up! Offer ends in': 'Dépêche-toi! L`offre se termine dans',
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
        Cart: 'عربة التسوق',
        Total: 'المجموع',
        'add to cart': 'أضف إلى السلة',
        'Hurry Up! Offer ends in': 'أسرع! العرض ينتهي في:',
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
        PageControle.showCart ||
        PageControle.showCategory ||
        PageControle.showOrder) && (
        <div
          className='overlay active'
          onClick={() => {
            setPageControle({
              showMenu: false,
              showCategory: false,
              showSearch: false,
              showCart: false,
              showOrder: false,
            });
          }}
        ></div>
      )}

      {/* <Modale /> */}
      {ShowNotif && <Notification setShowNotif={setShowNotif} />}

      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/service' element={<Service />} />
          <Route path='/brand' element={<Brand />} />
          <Route path='/order' element={<Order />} />
          <Route path='/category' element={<Category />} />
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
