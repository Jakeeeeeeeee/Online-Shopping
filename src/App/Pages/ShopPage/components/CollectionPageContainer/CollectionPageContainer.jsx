import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../../../../redux/shop/shopSelectors';
import WithSpinner from '../../../../components/withSpinner/withSpinner';
import CollectionPage from './CollectionPage';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state)
});

const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionOverviewContainer;
