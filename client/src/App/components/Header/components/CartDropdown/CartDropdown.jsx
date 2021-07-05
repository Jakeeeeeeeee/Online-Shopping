import React, { useContext } from 'react';
import Button from '../../../Button';
import './cartDropdown.styles.scss';
import CartItem from './components/CartItem';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../../../../redux/cart/cartActions/cartActions';
import { CartContext } from '../../../../../context/CartProvider/CartProvider';

const CartDropDown = ({ history, dispatch }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);

  return (
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
        toggleHidden();
      }}>
        GO TO CHECKOUT
      </Button>
    </div>
  )
};


export default withRouter(CartDropDown);
