import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionStartAsync } from '../../../redux/shop/shopActions';
import CollectionOverviewContainer from './components/CollectionOverviewContainer/CollectionOverviewContainer';
import CollectionPageContainer from './components/CollectionPageContainer/CollectionPageContainer';

const ShopPage = ({ fetchCollectionStartAsync, match }) => {
  useEffect(() => {
    fetchCollectionStartAsync();
  },[fetchCollectionStartAsync]);
  
    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          component={CollectionOverviewContainer} 
        />
        <Route 
          exact 
          path={`${match.path}/:collectionId`} 
          component={CollectionPageContainer} />  
      </div>
    )
  };

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
