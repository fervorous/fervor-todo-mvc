import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const Profile = ({data}) => {
  if (typeof data.person === 'undefined') {
    return <div>Loading</div>;
  };
  return <div>Hello {data.person.firstName}</div>;
};
Profile.propTypes = {
  data: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const QueryProfile = (gql`
  query ProfileQuery($nodeId: ID!) {
    person(nodeId: $nodeId) {
      nodeId
      firstName
      lastName
    }
  }`);

export default compose(
  graphql(QueryProfile, {
      options: ({ match: { params: { id }} }) => ({ variables: { nodeId: id } }),
  }),
)(Profile);
