import React from 'react';

function Cart() {
  return (
    <div className='side-cart-summary active'>
      <div className='cart-header'>
        <h3>
          سلة مشترياتي
          <small>1 عناصر</small>
        </h3>{' '}
        <i className='yc yc-x-circle'></i>
      </div>{' '}
      <main className='cart-body'>
        <div className='cart-list'>
          <form action='/'>
            <ul className='list-unstyled'>
              <li className='cart-item'>
                <img
                  src='https://cdn.youcan.shop/stores/2a0c0959c9ce5dc394e3768614757f36/products/yUyru9tlow0nhE7JeBScrN4cRpkTkl2gDYu4EBFE_md.jpeg'
                  alt='3في1 قطاعة خضر منزلية عملية ومريحة متعددة الأغراض ذات سعة كبيرة هرس الثوم وتقطيع البطاطس دائرية vegetable cutter'
                  className='item-thumbnail'
                />{' '}
                <div className='item-body'>
                  <div className='item-details'>
                    <h3>
                      <a href='https://caposhop.store/products/vegetable-cutter-1'>
                        3في1 قطاعة خضر منزلية عملية ومريحة متعددة الأغراض ذات
                        سعة كبيرة هرس الثوم وتقطيع البطاطس دائرية vegetable
                        cutter
                      </a>
                    </h3>{' '}
                    <div className='quantity-wrapper'>
                      <span className='quantity'>
                        الكمية <small>1</small>
                      </span>{' '}
                      <span className='currency-value'>
                        <span className='value'>199</span>
                        <span className='currency'>&nbsp;MAD</span>
                      </span>
                    </div>
                  </div>{' '}
                  <div className='item-actions'>
                    <button type='button'>
                      <i className='yc yc-edit'></i>
                    </button>{' '}
                    <button type='button'>
                      <i className='yc yc-trash'></i>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </form>
        </div>{' '}
      </main>{' '}
      <footer className='cart-footer'>
        <h4>
          مجموع سلة التسوق
          <span className='currency-value'>
            <span className='value'>199</span>
            <span className='currency'>&nbsp;MAD</span>
          </span>
        </h4>{' '}
        <div className='cart-actions'>
          <button className='button primary-button'>شراء الآن</button>{' '}
          <a className='button default-button'>استمر في التسوق</a>
        </div>
      </footer>
    </div>
  );
}

export default Cart;
