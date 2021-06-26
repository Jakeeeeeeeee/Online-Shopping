import React from 'react';
import CollectionOverview from './components/CollectionOverview';
import { Route } from 'react-router-dom';
import CollectionPage from './components/CollectionPage/CollectionPage';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  )
};

export default ShopPage;
