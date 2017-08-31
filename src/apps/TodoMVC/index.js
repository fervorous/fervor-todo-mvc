import { React, PropTypes, gql, graphql, compose, Link } from 'fervor/lib';

import { allGoals } from './queries';
import Template from '../../components/Template';
import TodoList from './TodoList';
import styles from './styles/todo.scss';

const TodoMVC = ({data}) => {
  if (typeof data.allGoals === 'undefined') {
    return <div>Loading</div>;
  }
  return (
    <div>
      <Template title="Goal List">
        <TodoList goals={data.allGoals} />
      </Template>
      <div className={styles.footer}>
        <Link to="/about">about</Link>
      </div>
    </div>
  );
};
TodoMVC.propTypes = {
  data: PropTypes.object.isRequired,
};

export default compose(graphql(allGoals))(TodoMVC);
