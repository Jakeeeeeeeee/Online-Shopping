import React, { useState } from 'react';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import { auth, createUserProfileDocument } from '../../../../../firebase/firebase.utils';
import './signUp.styles.scss';

const SignUp = () => {
  const [signUpDetails, setSignUpDetails] = useState({ displayName:'', email:'', password:'', confirmPassword:'' })

  const { displayName, email, password, confirmPassword} = signUpDetails;

  const handleSubmit = async event => {
    event.preventDefault();

    if(password !== confirmPassword) {
      alert("password do not match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
        console.log(user);
      await createUserProfileDocument(user, { displayName });

      setSignUpDetails({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } =event.target;

    setSignUpDetails({...signUpDetails, [name]: value});
  };

    return(
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign Up with your email</span>
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <Input 
            type="text" 
            name="displayName" 
            value={displayName} 
            onChange={handleChange}
            label="Display Name"
            required 
          />

          <Input 
            type="text" 
            name="email" 
            value={email} 
            onChange={handleChange}
            label="Email"
            required 
          />

          <Input 
            type="password" 
            name="password" 
            value={password} 
            onChange={handleChange}
            label="Password"
            required 
          />

          <Input 
            type="password" 
            name="confirmPassword" 
            value={confirmPassword} 
            onChange={handleChange}
            label="Password"
            required 
          />

          <Button type="submit">SIGN UP</Button>
        </form>
      </div>
    )
  }

export default SignUp;