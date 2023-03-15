import React, { useContext, useEffect, useState } from 'react';
import { MyContext } from '../context/MyContext';

function Notification({ setShowNotif }) {
  const { Products } = useContext(MyContext);
  const [Product, setProduct] = useState();

  useEffect(() => {
    let timer = setInterval(() => {
      let l = Products?.length;
      if (l) setProduct(Products[Math.floor(Math.random() * l)]);
    }, 20000);

    return () => clearInterval(timer);
  }, [Products]);

  if (Product)
    return (
      <div className='notification-toast'>
        <button className='toast-close-btn' onClick={() => setShowNotif(false)}>
          <ion-icon name='close-outline'></ion-icon>
        </button>

        <div className='toast-banner'>
          <img
            src={Product?.photos[0]}
            alt='Rose Gold Earrings'
            width='80'
            height='70'
          />
        </div>

        <div className='toast-detail'>
          <p className='toast-message'>تم شراء منتج</p>

          <p className='toast-title'>{Product?.name}</p>

          <p className='toast-meta'>
            <time dateTime='PT2M'>2 Minutes</time> ago
          </p>
        </div>
      </div>
    );
}

export default Notification;
