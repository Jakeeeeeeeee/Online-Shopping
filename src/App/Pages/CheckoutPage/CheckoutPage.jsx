import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../../redux/cart/cartSelectors';
import './checkoutPage.styles.scss';
import { selectCartTotal } from '../../../redux/cart/cartSelectors';
import { connect } from 'react-redux';
import CheckoutItem from './CheckoutItem';

const headerItems = [
  "Product",
  "Description",
  "Quantity",
  "Price",
  "Remove"
];

const CheckoutPage = ({ cartItems, total }) => (
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
      <span>TOTAL: ${total}</span>
    </div> 
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
