import React, { useContext, useState } from 'react';
import {ReactComponent as Logo } from '../../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from './components/CartIcon';
import CartDropDown from './components/CartDropdown';
import { HeaderContainer, LogoContainer, OptionContainer, OptionLink } from './HeaderStyles';
import CurrentUserContext from '../../../context/CurrentUserContext/CurrentUserContext';
import CartContext from '../../../context/CartContext/CartContext';

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const [ hidden, setHidden ] = useState(true);
  const toggleHidden = () => setHidden(!hidden);

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
        <CartContext.Provider value={{ hidden, toggleHidden }}>
          <CartIcon />
        </CartContext.Provider>
        
      </OptionContainer>
      {
        !hidden && <CartDropDown />
      }
    </HeaderContainer>
  )
};

export default Header;
