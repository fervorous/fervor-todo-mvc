import { React, Form } from 'fervor/lib';

import { allGoals, createGoal } from './queries';
import styles from './styles/todo.scss';

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onKeyPress(e) {
    if (e.key !== 'Enter' || e.target.tagName !== 'FORM') {
      return;
    }
    e.target.submit();
  }

  render() {
    // refetchQueries is only required for lists
    return (
      <Form
        mutation={createGoal}
        onKeyPress={this.onKeyPress}
        refetchQueries={[
          { query: allGoals },
        ]}
      >
        <input
          name="create[goal][name]"
          className={styles.newTodo}
          placeholder="What needs to be done?"
          autoFocus=""
        />
      </Form>
    );
  }
}

export default CreateTodo;
