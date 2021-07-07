import React, { useEffect, useState, lazy, Suspense  } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import { auth, createUserProfileDocument } from '../firebase/firebase.utils';
import CurrentUserContext from '../context/CurrentUserContext/CurrentUserContext';
import { GlobalStyle } from '../globalStyles';

const HomePage = lazy(() => import ('./Pages/HomePage'));
const HatsPage = lazy(() => import ('./Pages/HatsPage'));
const ShopPage = lazy(() => import ('./Pages/ShopPage'));
const AuthPage = lazy(() => import ('./Pages/AuthPage'));
const CheckoutPage = lazy(() => import ('./Pages/CheckoutPage'));

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
        <Suspense fallback={<div>123</div>}>
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
        </Suspense>
      </>
    )
  };



export default App;
