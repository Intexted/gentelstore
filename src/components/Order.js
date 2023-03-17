import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { MyContext } from '../context/MyContext';
import moment from 'moment';
import { Post, Put } from '../services/Axios';
import { v4 } from 'uuid';

function Order() {
  const { setPageControle, myCart, setCart } = useContext(MyContext);
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      items: [],
      createdAt: moment().format(),
      shipping: 0,
      payment: 'true',
      Step: 'Created',
    },
    values: {
      items: myCart.map((c) => ({ product: c?.product?._id, items: c?.items })),
      createdAt: moment().format(),
      shipping: 0,
      payment: 'true',
      Step: 'Created',
    },
  });

  const on_submit = (d) => {
    const id = MyId();
    Put({ url: 'orders/' + id, data: { ...d, _id: id } })
      .then((d) => {
        setCart([]);
        setPageControle((p) => ({ ...p, showOrder: false }));
        localStorage.removeItem('cart');
        alert('تم الطلب بنجاح ');
      })
      .catch((e) => console.log(e));

    // console.log(d);
  };
  return (
    <div className='modal'>
      <div className='modal-content'>
        <button
          className='modal-close-btn'
          onClick={() => setPageControle((p) => ({ ...p, showOrder: false }))}
        >
          <ion-icon name='close-outline'></ion-icon>
        </button>

        {/* <div className='newsletter-img'>
              <img
                src='/images/newsletter.png'
                alt='subscribe newsletter'
                width='400'
                height='400'
              />
            </div> */}

        <div className='newsletter'>
          <form onSubmit={handleSubmit(on_submit)}>
            <div className='newsletter-header'>
              <h3
                className='newsletter-title'
                style={{ minWidth: 300, textAlign: 'right' }}
              >
                سجل المعلومات الخاصة بك
              </h3>
            </div>

            <input
              type='text'
              name='name'
              {...register('name')}
              className='email-field'
              placeholder='الاسم الكامل'
              required
            />

            <input
              type='text'
              name='phone'
              {...register('phone')}
              className='email-field'
              placeholder='رقم الهاتف'
              required
            />

            <input
              type='text'
              name='city'
              {...register('city')}
              className='email-field'
              placeholder='المدينة'
              required
            />

            <textarea
              rows={3}
              style={{ width: '100%' }}
              name='address'
              {...register('address')}
              className='email-field'
              placeholder='العنوان'
              required
            />

            <button
              type='submit'
              className='btn-newsletter'
              style={{ width: '100%' }}
            >
              تأكيد الطلب
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Order;

const MyId = () => '61f' + v4()?.replaceAll('-', '')?.slice(0, 21);
