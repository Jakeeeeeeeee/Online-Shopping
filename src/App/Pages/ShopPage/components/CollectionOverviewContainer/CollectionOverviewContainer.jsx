import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../../../../redux/shop/shopSelectors';
import WithSpinner from '../../../../components/withSpinner/withSpinner';
import CollectionOverview from './CollectionOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview));

export default CollectionOverviewContainer;
