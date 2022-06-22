import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

interface IHeaderProps {
  userName: string;
}

export const Header: React.FC<IHeaderProps> = ({ userName }) => {
  return (
    <div className={styles.Header}>
      {userName}
      <Link to="/">Posts</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
};
