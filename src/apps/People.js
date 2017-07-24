import PropTypes from 'prop-types';
import React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { Link } from 'react-router-dom';

import styles from './styles/people.scss';

const People = ({data}) => {
  if (typeof data.allPeople === 'undefined') {
    return <div>Loading</div>;
  }
  return (
    <ul className={styles.component}>
      { data.allPeople.nodes.map((person) => (
        <li key={person.id}>
          <Link to={`/people/${person.id}`}>
            { `${person.firstName} ${person.lastName}` }
          </Link>
        </li>
      ))}
    </ul>
  );
};
People.propTypes = {
  data: PropTypes.object.isRequired,
};

export default compose(
  graphql(gql`
    query PeopleQuery {
      allPeople {
        nodes {
          id
          firstName
          lastName
        }
      }
    }
  `),
)(People);
