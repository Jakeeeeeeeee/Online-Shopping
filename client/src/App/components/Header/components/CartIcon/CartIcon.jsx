import React, { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../../../../assets/shopping-bag.svg';
import './cartIcon.styles.scss';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../../../../redux/cart/cartSelectors';
import { createStructuredSelector } from 'reselect';
import CartContext from '../../../../../context/CartContext/CartContext';

const CartIcon = ({ itemCount }) => {
  const { toggleHidden } = useContext(CartContext);

  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps)(CartIcon);
