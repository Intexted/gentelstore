import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../context/MyContext';

function ProductCard({ category, store }) {
  const {
    setPageControle,
    Products,
    Categorys,
    wishes,
    setWishes,
    setCart,
    myCart,
  } = useContext(MyContext);

  const wishes_action = (p) => {
    let product = wishes?.find((w) => w?._id === p?._id);
    let new_wishes = [];
    if (product) {
      new_wishes = wishes?.filter((w) => w?._id !== p?._id);
    } else {
      new_wishes = [...wishes, p];
    }
    setWishes(new_wishes);
    localStorage.setItem(
      'wishes',
      JSON?.stringify(new_wishes?.map((w) => w?._id))
    );
  };

  const cart_add = ({ product, items = 1 }) => {
    let index = myCart?.findIndex((c) => c?.product?._id === product?._id);
    let new_cart = [...myCart];
    if (index >= 0) {
      new_cart = myCart?.filter((c) => c?.product?._id !== product?._id);
    } else {
      new_cart.push({ product, items });
      setPageControle((page) => ({ ...page, showCart: true }));
    }
    setCart(new_cart);
    localStorage.setItem(
      'cart',
      JSON?.stringify(
        new_cart?.map((i) => ({ product: i?.product?._id, items: i?.items }))
      )
    );
  };
  return (
    <div className='product-grid'>
      {Products.length > 0 &&
        Products?.filter((p) =>
          category ? p.category === category : store ? p.store === store : true
        )?.map((p, i) => (
          <div className='showcase' key={i}>
            <div className='showcase-banner'>
              <Link to={`/product/${p?._id}`}>
                <img
                  src={p?.photos[0]}
                  alt={p?.name}
                  width='300'
                  loading='lazy'
                  className='product-img default'
                />
              </Link>
              <Link to={`/product/${p?._id}`}>
                <img
                  src={p?.photos[1]}
                  alt={p?.name}
                  width='300'
                  loading='lazy'
                  className='product-img hover'
                />
              </Link>
              <p
                className={`showcase-badge ${p?.badge?.color} ${p?.badge?.type}`}
              >
                {p?.badge?.value}
              </p>

              <div className='showcase-actions'>
                <button
                  className={`btn-action ${
                    wishes.find((w) => w?._id === p?._id) ? 'heart-active' : ''
                  }`}
                  onClick={() => wishes_action(p)}
                >
                  <ion-icon name='heart-outline'></ion-icon>
                </button>

                <Link to={`/product/${p?._id}`}>
                  <button className='btn-action'>
                    <ion-icon name='eye-outline'></ion-icon>
                  </button>
                </Link>

                <button className='btn-action'>
                  <ion-icon name='repeat-outline'></ion-icon>
                </button>

                <button
                  className={`btn-action ${
                    myCart.find((i) => i?.product?._id === p?._id)
                      ? 'cart-active'
                      : ''
                  }`}
                  onClick={() => cart_add({ product: p, items: 1 })}
                >
                  <ion-icon name='bag-add-outline'></ion-icon>
                </button>
              </div>
            </div>

            <div className='showcase-content'>
              <Link to={`/product/${p?._id}`} className='showcase-category'>
                {Categorys?.find((c) => c?._id === p?.category)?.name}
              </Link>

              <Link to={`/product/${p?._id}`}>
                <h3 className='showcase-title'>{p?.name}</h3>
              </Link>

              <div className='showcase-rating'>
                <ion-icon name='star'></ion-icon>
                <ion-icon name='star'></ion-icon>
                <ion-icon name='star'></ion-icon>
                <ion-icon name='star-outline'></ion-icon>
                <ion-icon name='star-outline'></ion-icon>
              </div>

              <div className='price-box'>
                <p className='price'>{p?.prix}</p>
                <del>{+p?.prix + p?.prix / 10}</del>
                <div style={{ marginLeft: 'auto' }}></div>
                <button
                  onClick={() => cart_add({ product: p, items: 1 })}
                  className='banner-btn'
                  style={{ margin: 'auto 0px ', marginTop: -10 }}
                >
                  شراء الان
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductCard;
