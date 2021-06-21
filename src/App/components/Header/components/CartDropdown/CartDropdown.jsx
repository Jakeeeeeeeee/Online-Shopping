import React from 'react';
import Button from '../../../Button';
import './cartDropdown.styles.scss';
import CartItem from './components/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../../../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../../../../redux/cart/cartActions/cartActions';


const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={CartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )
      }
    </div>
    <Button onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden())
    }}>
      GO TO CHECKOUT
    </Button>
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
