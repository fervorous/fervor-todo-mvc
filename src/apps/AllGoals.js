import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';

import styles from './styles/allgoals.scss';

const AllGoals = ({data}) => {
  if (typeof data.allGoals === 'undefined') {
    return <div>Loading</div>;
  }
  return (
    <ul className={styles.component}>
      { data.allGoals.nodes.map((goal) => (
        <li key={goal.id}>
          <Link to={`/goal/${goal.id}`}>
            { `${goal.name} Completed?: ${goal.completed}` }
          </Link>
        </li>
      ))}
    </ul>
  );
};
AllGoals.propTypes = {
  data: PropTypes.object.isRequired,
};

export default compose(
  graphql(gql`
    query AllGoals {
      allGoals {
        nodes {
          id
          name
          completed
        }
      }
    }
  `),
)(AllGoals);
