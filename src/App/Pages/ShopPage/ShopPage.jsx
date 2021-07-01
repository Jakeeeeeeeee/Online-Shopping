import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionStartAsync } from '../../../redux/shop/shopActions';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../../redux/shop/shopSelectors';
import CollectionOverviewContainer from './components/CollectionOverviewContainer/CollectionOverviewContainer';
import CollectionPageContainer from './components/CollectionPageContainer/CollectionPageContainer';

class ShopPage extends React.Component {

  componentDidMount () {
   const { fetchCollectionStartAsync } = this.props;

   fetchCollectionStartAsync();
  }
  
  render() {
    const { match } = this.props;
    
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
  }
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
