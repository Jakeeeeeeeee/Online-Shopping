import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import { Route } from 'react-router-dom';
import HatsPage from './Pages/HatsPage';

function App() {
  return (
    <>
      <Route exact="true" path="/" component={HomePage} />
      <Route path='/hats' component={HatsPage} />
    </>
  );
}

export default App;
