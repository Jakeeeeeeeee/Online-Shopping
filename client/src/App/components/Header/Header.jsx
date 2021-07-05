import React, { useContext } from 'react';
import {ReactComponent as Logo } from '../../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../../firebase/firebase.utils';
import CartIcon from './components/CartIcon';
import CartDropDown from './components/CartDropdown';
import { HeaderContainer, LogoContainer, OptionContainer, OptionLink } from './HeaderStyles';
import CurrentUserContext from '../../../context/CurrentUserContext/CurrentUserContext';
import { CartContext } from '../../../context/CartProvider/CartProvider';

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const { hidden } = useContext(CartContext);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/shop" >
          CONTACT
        </OptionLink>
        {
          currentUser ? (
            <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
          ): (
            <OptionLink to="/auth">SIGN IN</OptionLink>
          )
        }
        <CartIcon />
      </OptionContainer>
      {
        !hidden && <CartDropDown />
      }
    </HeaderContainer>
  )
};

export default Header;
