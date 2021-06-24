import React from 'react';
import CollectionOverview from './components/CollectionOverview';

const ShopPage = ({collections}) => {
  return (
    <div className="shop-page">
      <CollectionOverview />
    </div>
  )
};

export default ShopPage;
