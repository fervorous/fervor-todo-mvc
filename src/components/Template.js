import { React, Document } from 'fervor/lib';
import styles from './styles/template.scss';

const Template = ({ children, title }) => (
  <Document title={title}>
    <div className={styles.todoapp}>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
      <header className={styles.header}>
        <h1>{title}</h1>
      </header>
      <div>
        {children}
      </div>
    </div>
  </Document>
);

export default Template;
