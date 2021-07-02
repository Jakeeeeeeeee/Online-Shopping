import React from 'react';
import './collectionItems.styles.scss';
import Button from '../../../../../../../components/Button';
import { connect } from 'react-redux';
import { addItem } from '../../../../../../../../redux/cart/cartActions/cartActions';

const CollectionItems = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;

  return (
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
    <Button onClick={() => addItem(item)} inverted>Add To Cart</Button>
  </div>
)};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItems);
