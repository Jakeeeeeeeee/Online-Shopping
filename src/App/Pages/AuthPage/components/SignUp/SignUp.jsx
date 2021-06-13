import React from 'react';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import { auth, createUserProfileDocument } from '../../../../../firebase/firebase.utils';
import './signUp.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword} = this.state;

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

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } =event.target;

    this.setState({ [name]: value});
  };

  render() {
    const { displayName, email, password, confirmPassword} = this.state;

    return(
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign Up with your email</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <Input 
            type="text" 
            name="displayName" 
            value={displayName} 
            onChange={this.handleChange}
            label="Display Name"
            required 
          />

          <Input 
            type="text" 
            name="email" 
            value={email} 
            onChange={this.handleChange}
            label="Email"
            required 
          />

          <Input 
            type="password" 
            name="password" 
            value={password} 
            onChange={this.handleChange}
            label="Password"
            required 
          />

          <Input 
            type="password" 
            name="confirmPassword" 
            value={confirmPassword} 
            onChange={this.handleChange}
            label="Password"
            required 
          />

          <Button type="submit">SIGN UP</Button>
        </form>
      </div>
    )
  }
}

export default SignUp;