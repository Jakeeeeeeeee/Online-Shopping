import React from 'react';
import PreviewCollection from '../../components/PreviewCollection';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../../redux/shop/shopSelectors';

const ShopPage = ({collections}) => {
    return (
      <div>
        {
          collections.map(({ id, ...otherProps }) => (
            <PreviewCollection key={id} {...otherProps} />
          ))
        }
      </div>
    )
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);
