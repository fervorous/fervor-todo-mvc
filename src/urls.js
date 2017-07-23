import About from './About';
import People from './People';
import Profile from './Profile';

export default {
  '/': About,
  '/people': People,
  '/people/:id': Profile,
};
