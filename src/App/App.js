import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import { Route } from 'react-router-dom';
import HatsPage from './Pages/HatsPage';
import ShopPage from './Pages/ShopPage';

function App() {
  return (
    <>
      <Route exact="true" path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
      <Route path="/shop" component={ShopPage} />
    </>
  );
}

export default App;
