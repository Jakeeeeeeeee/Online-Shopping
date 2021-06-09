import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import { Route } from 'react-router-dom';
import HatsPage from './Pages/HatsPage';
import ShopPage from './Pages/ShopPage';
import Header from './components/Header';
import AuthPage from './Pages/AuthPage';

function App() {
  return (
    <>
      <Header />
      <Route exact="true" path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
      <Route path="/shop" component={ShopPage} />
      <Route path="/Auth" component={AuthPage} />
    </>
  );
}

export default App;
