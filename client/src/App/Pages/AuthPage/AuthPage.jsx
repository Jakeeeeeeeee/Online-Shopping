import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import './authPage.styles.scss';

const AuthPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default AuthPage;
