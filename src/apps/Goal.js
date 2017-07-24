import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';

const Goal = ({data}) => {
  if (typeof data.goalById === 'undefined') {
    return <div>Loading</div>;
  };
  return <div>
    <h1>Goal Name: {data.goalById.name}</h1>
    <div>Is Completed: {data.goalById.completed ? 'Yes' : 'No'}</div>
  </div>;
};
Goal.propTypes = {
  data: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

const GoalQuery = (gql`
  query GoalQuery($id: Int!) {
    goalById(id: $id) {
      id
      name
      completed
    }
  }`);

export default compose(
  graphql(GoalQuery, {
      options: ({ match: { params: { id }} }) => ({ variables: { id: id } }),
  }),
)(Goal);
