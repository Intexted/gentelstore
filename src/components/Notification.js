import React from 'react';

function Notification({ setShowNotif }) {
  return (
    <div className='notification-toast'>
      <button className='toast-close-btn' onClick={() => setShowNotif(false)}>
        <ion-icon name='close-outline'></ion-icon>
      </button>

      <div className='toast-banner'>
        <img
          src='/images/products/shirt-1.jpg'
          alt='Rose Gold Earrings'
          width='80'
          height='70'
        />
      </div>

      <div className='toast-detail'>
        <p className='toast-message'>تم شراء منتج</p>

        <p className='toast-title'>قميص رجالي من النوع الرفيع</p>

        <p className='toast-meta'>
          <time dateTime='PT2M'>2 Minutes</time> ago
        </p>
      </div>
    </div>
  );
}

export default Notification;
