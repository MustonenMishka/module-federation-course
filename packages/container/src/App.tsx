// eslint-disable-next-line import/no-unresolved
import { Header } from 'uiKit/Header';
import React from 'react';

import './App.css';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header userName="Test Username" />
      Container
    </div>
  );
};
