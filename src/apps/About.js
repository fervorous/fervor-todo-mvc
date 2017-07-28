import React from 'react';
import { Link } from 'react-router-dom';

import Template from '../components/Template';

export default () => (
  <Template title="Fervor JS">
    <article style={{padding: 20}}>
      <p>
        This is our demo TodoMVC app for the FervorJS framework.
        Thanks for checking it out. We'll be updating it regularly as
        we update the framework and make it more robust.
      </p>
      <p>
        Check out these helpful links:
      </p>
      <ul>
        <li><Link to="/">Fervor's TodoMVC Demo!</Link></li>
        <li><Link to="https://github.com/fervorous/fervor">github.com/fervorous/fervor</Link></li>
        <li><Link to="https://github.com/fervorous/fervor-todo-mvc">github.com/fervorous/fervor-todo-mvc</Link></li>
      </ul>
    </article>
  </Template>
);
