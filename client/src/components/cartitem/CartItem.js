import React from 'react';

import './cart-item.styles.css';
import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../pages/helper/cartHelper';
import ImageHelper from '../../admin/helper/imageHelper';


const CheckoutItem = ({ product, reload=undefined, setReload=f => f }) => {
  
  const { name, price, quantity, id } = product;

  return (
    <div className='checkout-item'>
      <div className='image-container'>
          <ImageHelper product={product} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => {
            removeItemFromCart(id)
            setReload(!reload)
        }}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => {
            addItemToCart(product)
            setReload(!reload)
        }}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}$</span>
      <div className='remove-button' onClick={() => {
          clearItemFromCart(product)
          setReload(!reload)
      }}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;