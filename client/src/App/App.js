import React, { useEffect, useState } from 'react';
import HomePage from './Pages/HomePage';
import { Route, Redirect } from 'react-router-dom';
import HatsPage from './Pages/HatsPage';
import ShopPage from './Pages/ShopPage';
import Header from './components/Header';
import AuthPage from './Pages/AuthPage';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import CheckoutPage from './Pages/CheckoutPage';
import CurrentUserContext from '../context/CurrentUserContext/CurrentUserContext';
import { GlobalStyle } from '../globalStyles';

const App = () => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });

    return () => {
      unsubscribeFromAuth();
    };
  },[])

    return (
      <>
        <GlobalStyle />
        <CurrentUserContext.Provider value={currentUser} >
          <Header />
        </CurrentUserContext.Provider>
        
        <Route exact="true" path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route 
          exact 
          path="/Auth" 
          render={() => 
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <AuthPage />
            )
          } 
        />
      </>
    )
  };



export default App;
