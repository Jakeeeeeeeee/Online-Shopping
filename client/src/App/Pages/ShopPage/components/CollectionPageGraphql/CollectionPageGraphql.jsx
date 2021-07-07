import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionPage from '../CollectionPageContainer/CollectionPage';
import WithSpinner from '../../../../components/withSpinner/withSpinner';

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionPageGraphql = ({ match }) => (
  <Query 
    query={GET_COLLECTION_BY_TITLE} 
    variables={{ title: match.params.collectionId }} 
  >
    {
      ({ loading, data }) => {
        if (loading) return <WithSpinner />
        
        const { getCollectionsByTitle } = data;
        return <CollectionPage collection={getCollectionsByTitle} />;
      }
    }
  </Query>
);

export default CollectionPageGraphql;
