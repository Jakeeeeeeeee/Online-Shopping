import React, { useContext } from 'react';
import './checkoutItem.styles.scss';
import { CartContext } from '../../../../context/CartProvider/CartProvider';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItem, removeItem, clearItem } = useContext(CartContext);

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <span 
        className='remove-button' 
        onClick={() => clearItem(cartItem)} 
      >
        &#10005;
      </span>
    </div>
  )
};

export default CheckoutItem;
