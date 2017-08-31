import { React, Link } from 'fervor/lib';

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
        <li>
          <a href="https://github.com/fervorous/fervor" target="_blank">
            github.com/fervorous/fervor
          </a>
        </li>
        <li>
          <a href="https://github.com/fervorous/fervor-todo-mvc" target="_blank">
            github.com/fervorous/fervor-todo-mvc
          </a>
        </li>
      </ul>
    </article>
  </Template>
);
