import React from 'react';
import Button from '../Button';
import Input from '../Input';
import './signIn.styles.scss';

class SignIn extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" })
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    return(
      <div className="sign-in">
        <h2 className="title">I already have account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <Input 
            name="email" 
            type="email" 
            label="Email"
            value={this.state.email} 
            handleChange={this.handleChange}
            required 
          />

          <Input 
            name="password" 
            type="password"
            label="Password" 
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <Button type="submit">Sign In</Button>
        </form>
      </div>
    )
  }
}

export default SignIn;
