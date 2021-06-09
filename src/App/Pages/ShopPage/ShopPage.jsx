import React from 'react';
import PreviewCollection from '../../components/PreviewCollection';
import SHOP_DATA from './ShopData';

class ShopPage extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render () {
    const {collections} = this.state;

    return (
      <div>
        {
          collections.map(({ id, ...otherProps }) => (
            <PreviewCollection key={id} {...otherProps} />
          ))
        }
      </div>
    )
  }
} 

export default ShopPage;
