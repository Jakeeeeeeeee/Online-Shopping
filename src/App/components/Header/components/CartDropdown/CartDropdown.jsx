import React from 'react';
import Button from '../../../Button';
import './cartDropdown.styles.scss';
import CartItem from './components/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../../../../redux/cart/cartSelectors';

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.map(cartItem => (
          <CartItem key={CartItem.id} item={cartItem} />
        ))
      }
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
)

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropDown);
