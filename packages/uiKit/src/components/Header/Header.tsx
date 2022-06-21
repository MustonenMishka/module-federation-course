import React from 'react';

import styles from './Header.module.css';

interface IHeaderProps {
  userName: string;
}

export const Header: React.FC<IHeaderProps> = ({ userName }) => {
  return <div className={styles.Header}>{userName}</div>;
};
