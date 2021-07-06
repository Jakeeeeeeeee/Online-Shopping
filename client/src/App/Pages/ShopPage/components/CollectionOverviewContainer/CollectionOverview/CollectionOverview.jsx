import React from 'react';
import './collectionOverview.styles.scss';
import PreviewCollection from './PreviewCollection';

const CollectionOverview = ({collections}) => {
    return (
      <div className="collections-overview">
        {
          collections.map(({ id, ...otherProps }) => (
            <PreviewCollection key={id} {...otherProps} />
          ))
        }
      </div>
    )
};

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollectionsForPreview
// });

export default CollectionOverview;
