import { React, Link } from 'fervor/lib';
import styles from './styles/todo.scss';

import CreateTodo from './CreateTodo';
import TodoCard from './TodoCard';

const TodoList = ({ goals }) => (
  <div>
    <CreateTodo />
    <div className={styles.todoList}>
      { goals.nodes.map((goal) => (
        <TodoCard key={goal.id} goal={goal} />
      ))}
    </div>
  </div>
);

export default TodoList;
