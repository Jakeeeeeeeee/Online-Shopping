import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import { Route } from 'react-router-dom';
import HatsPage from './Pages/HatsPage';
import ShopPage from './Pages/ShopPage';
import Header from './components/Header';
import AuthPage from './Pages/AuthPage';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Route exact="true" path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/Auth" component={AuthPage} />
      </>
    )
  }
}

export default App;
