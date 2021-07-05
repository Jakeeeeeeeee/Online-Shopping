import React, { useContext } from 'react';
import './collectionPage.styles.scss';
import CollectionItems from '../../CollectionOverviewContainer/CollectionOverview/PreviewCollection/CollectionItems';
import CollectionsContext from '../../../../../../context/CollectionsContext/CollectionsContext';

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];

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

export default CollectionPage;
 