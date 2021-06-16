import React from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo } from '../../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon';
import CartDropDown from '../CartDropdown';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop" >
        CONTACT
      </Link>
      {console.log(currentUser)}
      {
        currentUser?.displayName ? (
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        ): (
          <Link className="option" to="/auth">SIGN IN</Link>
        )
      }
      <CartIcon />
    </div>
    {
      !hidden && <CartDropDown />
    }
  </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
});

export default connect(mapStateToProps)(Header);
