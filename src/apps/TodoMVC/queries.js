import { gql } from 'fervor/lib';

export const allGoals = gql`
  query AllGoals {
    allGoals {
      nodes {
        id
        name
        completed
      }
    }
  }
`;

export const deleteGoal = gql`
  mutation DeleteGoal($goalId: Int!) {
    deleteGoalById(input: {
      id: $goalId
    }) {
      goal {
        id
      }
    }
  }
`;

export const updateGoal = gql`
  mutation UpdateGoalById($update: UpdateGoalByIdInput!) {
    updateGoalById(input: $update) {
      goal {
        id
        name
        completed
        createdAt
      }
    }
  }
`;

export const createGoal = gql`
  mutation CreateGoal($create: CreateGoalInput!) {
    createGoal(input: $create) {
      goal {
        id
        name
        completed
        createdAt
      }
    }
  }
`;
