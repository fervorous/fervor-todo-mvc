import classnames from 'classnames';
import { React, graphql } from 'fervor/lib';

import { updateGoal } from './queries';
import DeleteTodo from './DeleteTodo';
import styles from './styles/todo.scss';

class TodoCard extends React.Component {

  constructor(props) {
    super(props);
    this.detectLeaveKey = this.detectLeaveKey.bind(this);
    this.startEditing = this.startEditing.bind(this);
    this.stopUpdating = this.stopUpdating.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.state = {
      isEditing: false,
      name: props.goal.name,
      completed: props.goal.completed,
    };
  }

  startEditing() {
    this.setState({ isEditing: true });
  }

  stopUpdating() {
    this.setState({ isEditing: false });
  }

  detectLeaveKey(e) {
    if (e.key === 'Enter' || e.key === 'Tab') {
      this.stopUpdating();
    }
  }

  onUpdate(e) {
    let value = e.target.value;
    if (e.target.name === 'completed') {
      value = e.target.checked;
    }
    this.props.mutate({
      variables: {
        update: {
          id: this.props.goal.id,
          goalPatch: {
            [e.target.name]: value,
          },
        },
      },
    });
    this.setState({
      [e.target.name]: value,
    });
  }

  render() {
    const listItemClasses = classnames({
      [styles.editing]: this.state.isEditing,
      [styles.completed]: this.state.completed,
    });

    return (
      <li className={listItemClasses}>
        <div className={styles.view}>
          <input
            className={styles.toggle}
            defaultChecked={this.state.completed}
            name="completed"
            onChange={this.onUpdate}
            type="checkbox"
          />
          <label onClick={this.startEditing}>
            {this.state.name}
          </label>
          <DeleteTodo goalId={this.props.goal.id} onDelete={this.handleDelete} />
        </div>
        <input
          className={styles.edit}
          defaultValue={this.state.name}
          name="name"
          onBlur={this.stopUpdating}
          onKeyPress={this.detectLeaveKey}
          onInput={this.onUpdate}
        />
      </li>
    );
  }
}

export default graphql(updateGoal)(TodoCard);
