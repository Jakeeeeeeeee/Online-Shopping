import React from 'react';
import CollectionOverview from './components/CollectionOverview';
import { Route } from 'react-router-dom';
import CollectionPage from './components/CollectionPage/CollectionPage';
import { firestore, convertCollectionsSnapshotToMap } from '../../../firebase/firebase.utils';
import { updateCollections } from '../../../redux/shop/shopActions';
import { connect } from 'react-redux';

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount () {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap);
    });
  }
  
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
