import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

function ProductCard({ category, store }) {
  const { Products, Categorys, wishes, setWishes } = useContext(MyContext);

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
  return (
    <div className='product-grid'>
      {Products.length > 0 &&
        Products?.filter((p) =>
          category ? p.category === category : store ? p.store === store : true
        )?.map((p, i) => (
          <div className='showcase' key={i}>
            <div className='showcase-banner'>
              <img
                src={p?.photos[0]}
                alt={p?.name}
                width='300'
                loading='lazy'
                className='product-img default'
              />
              <img
                src={p?.photos[1]}
                alt={p?.name}
                width='300'
                loading='lazy'
                className='product-img hover'
              />

              <p
                className={`showcase-badge ${p?.badge?.color} ${p?.badge?.type}`}
              >
                {p?.badge?.value}
              </p>

              <div className='showcase-actions'>
                <button className='btn-action' onClick={() => wishes_action(p)}>
                  <ion-icon name='heart-outline'></ion-icon>
                </button>

                <button className='btn-action'>
                  <ion-icon name='eye-outline'></ion-icon>
                </button>

                <button className='btn-action'>
                  <ion-icon name='repeat-outline'></ion-icon>
                </button>

                <button className='btn-action'>
                  <ion-icon name='bag-add-outline'></ion-icon>
                </button>
              </div>
            </div>

            <div className='showcase-content'>
              <a href='#' className='showcase-category'>
                {Categorys?.find((c) => c?._id === p?.category)?.name}
              </a>

              <a href='#'>
                <h3 className='showcase-title'>{p?.name}</h3>
              </a>

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
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductCard;
