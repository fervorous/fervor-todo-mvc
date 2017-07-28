import React from 'react';
import styles from './styles/template.scss';

const Template = ({ children, title }) => (
  <div className={styles.todoapp}>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
    <div>
      {children}
    </div>
  </div>
);

export default Template;
