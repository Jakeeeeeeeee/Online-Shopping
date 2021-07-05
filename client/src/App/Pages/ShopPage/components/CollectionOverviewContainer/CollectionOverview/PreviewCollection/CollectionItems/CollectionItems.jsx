import React, { useContext } from 'react';
import './collectionItems.styles.scss';
import Button from '../../../../../../../components/Button';
import { CartContext } from '../../../../../../../../context/CartProvider/CartProvider';

const CollectionItems = ({ item }) => {
  const { id, name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);

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

export default CollectionItems;
