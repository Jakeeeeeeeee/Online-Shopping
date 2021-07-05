import React, { useContext } from 'react';
import './checkoutPage.styles.scss';
import CheckoutItem from './CheckoutItem';
import StripeButton from '../../components/StripeButton/StripeButton';
import { CartContext } from '../../../context/CartProvider/CartProvider';

const headerItems = [
  "Product",
  "Description",
  "Quantity",
  "Price",
  "Remove"
];

const CheckoutPage = () => {
  const { cartItems, cartItemsPrice } = useContext(CartContext);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        {
          headerItems.map((item) => (
            <div key={item} className="header-block">
              <span>{item}</span>
            </div>
          ))
        }
      </div>
      {
        cartItems.map(cartItem => 
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )
      }
      <div className="total">
        <span>TOTAL: ${cartItemsPrice}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 4242
      </div> 
      <StripeButton price={cartItemsPrice} />
    </div>
  )
}

export default CheckoutPage;
