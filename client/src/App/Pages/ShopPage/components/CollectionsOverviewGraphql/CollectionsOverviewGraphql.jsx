import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionOverview from '../CollectionOverviewContainer/CollectionOverview';
import WithSpinner from '../../../../components/withSpinner/withSpinner';

const GET_COLLECTIONS = gql `
  {
    collections {
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

const CollectionsOverviewGraphql = () => (
  <Query query={GET_COLLECTIONS} >
    {
      ({ loading, data }) => {
        if (loading) return <WithSpinner />;
        return <CollectionOverview collections={data.collections} />
      }
    }
  </Query>
);

export default CollectionsOverviewGraphql;
