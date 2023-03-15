import React, { createContext, useEffect, useState } from 'react';
import i18n, { t } from 'i18next';
import axios from 'axios';

export const MyContext = createContext();

function MyContextProvider({ children }) {
  const [PageControle, setPageControle] = useState({
    showMenu: false,
    showCategory: false,
    showSearch: false,
    showWishes: false,
  });
  const [sliders, setSliders] = useState([]);
  const [Products, setProducts] = useState([]);
  const [Categorys, setCategorys] = useState([]);
  const [Stores, setStores] = useState([]);

  const [wishes, setWishes] = useState([]);
  const [social, setSocial] = useState({
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    whatsapp: '',
  });

  const [Logo, setLogo] = useState({ img: '', name: '', message: '' });

  useEffect(() => {
    GetData('products')
      .then((d) => {
        if (!d?.error)
          try {
            setProducts(Object.values(d.data));
          } catch (error) {}
      })

      .catch((err) => {
        console.log(err);
      });

    GetData('categorys').then((d) => {
      if (!d?.error) setCategorys(Object.values(d.data));
    });

    GetData('stores').then((d) => {
      if (!d?.error) setStores(Object.values(d.data));
    });

    GetData('my_store').then((d) => {
      if (!d?.error)
        try {
          let {
            sliders,
            config: { facebook, insta, whats, name, logo, message, lng },
          } = d.data;
          if (lng) {
            i18n.changeLanguage(lng);
            document.documentElement.lang = lng;
          }
          setLogo({ img: logo, name, message });
          setSocial({ facebook, instagram: insta, whatsapp: whats });

          if (sliders) setSliders(Object.values(sliders));
        } catch (error) {}
    });
  }, []);

  useEffect(() => {
    if (Products) {
      let storage_wishes = localStorage?.getItem('wishes');
      if (storage_wishes) {
        let wishes_array = [];
        try {
          wishes_array = JSON?.parse(storage_wishes);
        } catch (error) {}
        if (wishes_array)
          setWishes(Products.filter((p) => wishes_array?.includes(p?._id)));
      }
    }
  }, [Products]);

  return (
    <MyContext.Provider
      value={{
        PageControle,
        setPageControle,
        Products,
        Categorys,
        social,
        sliders,
        Logo,
        Stores,
        wishes,
        setWishes,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyContextProvider;

const Axios = axios.create({
  baseURL: 'https://app-yr-default-rtdb.europe-west1.firebasedatabase.app/',
  // baseURL: 'http://localhost:3200/',
});
const GetData = (url) => {
  return Axios.get(url);
};
