import React from 'react';
import './collectionItems.styles.scss';
import Button from '../../Button';

const CollectionItems = ({ id, name, price, imageUrl }) => (
<div key={id} className="collection-item">
  <div 
    className="image"  
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
  />
  <div className="collection-footer">
    <span className="name">{name}</span>
    <span className="price">{price}</span>
  </div>
  <Button inverted>Add To Cart</Button>
</div>
);

export default CollectionItems;
