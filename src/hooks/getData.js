import axios from 'axios';
import { useEffect, useState } from 'react';
import i18n, { t } from 'i18next';

const Get = (url) => {
  const Axios = axios.create({
    baseURL: 'https://app-yr-default-rtdb.europe-west1.firebasedatabase.app/',
    // baseURL: 'http://localhost:3200/',
  });
  return Axios.get(url + '.json');
};

export const useGetData = () => {
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
    Get('products')
      .then((d) => {
        if (!d?.error)
          try {
            setProducts(Object.values(d.data));
          } catch (error) {}
      })

      .catch((err) => {
        console.log(err);
      });

    Get('categorys').then((d) => {
      if (!d?.error) setCategorys(Object.values(d.data));
    });

    Get('stores').then((d) => {
      if (!d?.error) setStores(Object.values(d.data));
    });

    Get('my_store').then((d) => {
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

  return {
    Products,
    Categorys,
    social,
    sliders,
    Logo,
    Stores,
  };
};
