import About from './apps/About';
import People from './apps/People';
import Profile from './apps/Profile';

export default {
  '/': About,
  '/people': People,
  '/people/:id': Profile,
};
