import React, { createContext, useEffect, useState } from 'react';
import i18n, { t } from 'i18next';
import axios from 'axios';
import { useGetData } from '../hooks/getData';

export const MyContext = createContext();

function MyContextProvider({ children }) {
  const [PageControle, setPageControle] = useState({
    showMenu: false,
    showCategory: false,
    showSearch: false,
    showWishes: false,
    showCart: false,
  });

  const { Products, Categorys, social, sliders, Logo, Stores } = useGetData();
  const [wishes, setWishes] = useState([]);
  const [myCart, setCart] = useState([]);

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

      let storage_cart = localStorage?.getItem('cart');
      if (storage_cart) {
        let cart_array = [];
        try {
          cart_array = JSON?.parse(storage_cart);
          if (cart_array)
            setCart(
              cart_array.map((i) => ({
                product: Products?.find((p) => i.product === p?._id),
                items: i.items,
              }))
            );
        } catch (error) {}
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
        myCart,
        setCart,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyContextProvider;
