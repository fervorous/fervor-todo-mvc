import About from './apps/About';
import AllGoals from './apps/AllGoals';
import Goal from './apps/Goal';

export default {
  '/': About,
  '/goal': AllGoals,
  '/goal/:id': Goal,
};
