import React, { useState } from 'react';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import './signIn.styles.scss';
import { auth, signInWithGoogle } from '../../../../../firebase/firebase.utils';

const SignIn = () => {
  const [accountDetail, setAccountDetail] = useState({ email:'', password:'' })

  const { email, password } = accountDetail;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setAccountDetail({ email:'', password:'' });
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log(value);

    setAccountDetail({...accountDetail, [name]: value });
  };

    return(
      <div className="sign-in">
        <h2 className="title">I already have account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <Input 
            name="email" 
            type="email" 
            label="Email"
            value={email} 
            handleChange={handleChange}
            required 
          />

          <Input 
            name="password" 
            type="password"
            label="Password" 
            value={password}
            handleChange={handleChange}
            required
          />

          <div className="buttons">
            <Button type="submit">Sign In</Button>
            <Button
              type="button" 
              onClick={signInWithGoogle} 
              isGoogleSignIn
            >
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    )
  };

export default SignIn;

