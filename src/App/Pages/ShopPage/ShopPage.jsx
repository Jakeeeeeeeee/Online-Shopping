import React from 'react';
import CollectionOverview from './components/CollectionOverview';
import { Route } from 'react-router-dom';
import CollectionPage from './components/CollectionPage/CollectionPage';
import { connect } from 'react-redux';
import WithSpinner from '../../components/withSpinner/withSpinner';
import { fetchCollectionStartAsync } from '../../../redux/shop/shopActions';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../../redux/shop/shopSelectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  componentDidMount () {
   const { fetchCollectionStartAsync } = this.props;
   
   fetchCollectionStartAsync();
  }
  
  render() {
    const { match, isCollectionFetching } = this.props;

    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} /> } 
        />
        <Route 
          exact 
          path={`${match.path}/:collectionId`} 
          render={(props) => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} /> } 
        />
      </div>
    )
  }
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
