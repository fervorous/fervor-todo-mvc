import { React, graphql } from 'fervor/lib';

import { allGoals, deleteGoal } from './queries';
import styles from './styles/todo.scss';

class DeleteButton extends React.Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    this.props.mutate({
      variables: {
        goalId: this.props.goalId,
      },
      update: (proxy, { data }) => {
        const goalId = data.deleteGoalById.goal.id;
        const newData = proxy.readQuery({ query: allGoals });
        newData.allGoals.nodes = newData.allGoals.nodes.filter((goal) => goal.id !== goalId);
        proxy.writeQuery({ query: allGoals, data: newData });
      },
    });
  }

  render() {
    return (
      <button className={styles.destroy} onClick={this.onDelete} />
    );
  }
}

export default graphql(deleteGoal)(DeleteButton);
