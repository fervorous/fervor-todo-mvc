import React from 'react';
import { graphql } from 'react-apollo';

import { allGoals, createGoal } from './queries';
import styles from './styles/todo.scss';

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onKeyPress(e) {
    if (e.key !== 'Enter') {
      return;
    }
    this.props.mutate({
      variables: {
        "create": {
          "goal": {
            "name": e.target.value,
          }
        }
      },
      update: (proxy, { data }) => {
        const goal = data.createGoal.goal;
        const newData = proxy.readQuery({ query: allGoals });
        newData.allGoals.nodes.push(goal);
        proxy.writeQuery({ query: allGoals, data: newData });
      },
    });
    e.target.value = '';
  }

  render() {
    return (
      <input
        className={styles.newTodo}
        onKeyPress={this.onKeyPress}
        placeholder="What needs to be done?"
        autoFocus=""
      />
    );
  }
}

export default graphql(createGoal)(CreateTodo);
