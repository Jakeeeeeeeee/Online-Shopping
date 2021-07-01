import React from 'react';
import './collectionPage.styles.scss';
import CollectionItems from '../../CollectionOverviewContainer/CollectionOverview/PreviewCollection/CollectionItems';
import { connect } from 'react-redux';
import { selectCollection } from '../../../../../../redux/shop/shopSelectors';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage);
 