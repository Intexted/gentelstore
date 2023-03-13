import React, { createContext, useEffect, useState } from 'react';
import i18n, { t } from 'i18next';

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

  const [social, setSocial] = useState({
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    whatsapp: '',
  });

  const [Logo, setLogo] = useState({ img: '', name: '', message: '' });

  useEffect(() => {
    fetch(
      'https://app-yr-default-rtdb.europe-west1.firebasedatabase.app/products.json'
    )
      .then((res) => res.json())
      .then((d) => {
        if (!d?.error)
          try {
            setProducts(Object.values(d));
          } catch (error) {}
      })
      .catch((err) => {
        console.log(err);
      });
    fetch(
      'https://app-yr-default-rtdb.europe-west1.firebasedatabase.app/categorys.json'
    )
      .then((res) => res.json())
      .then((d) => {
        if (!d?.error) setCategorys(Object.values(d));
      });
    fetch(
      'https://app-yr-default-rtdb.europe-west1.firebasedatabase.app/stores.json'
    )
      .then((res) => res.json())
      .then((d) => {
        if (!d?.error) setStores(Object.values(d));
      });
    fetch(
      'https://app-yr-default-rtdb.europe-west1.firebasedatabase.app/my_store.json'
    )
      .then((res) => res.json())
      .then((d) => {
        if (!d?.error)
          try {
            let {
              sliders,
              config: { facebook, insta, whats, name, logo, message, lng },
            } = d;
            if (lng) {
              i18n.changeLanguage(lng);
              document.documentElement.lang = lng;
            }
            setLogo({ img: logo, name, message });
            setSocial({ facebook, instagram: insta, whatsapp: whats });

            if (sliders) setSliders(Object.values(d?.sliders));
          } catch (error) {}
      });
  }, []);

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
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyContextProvider;
