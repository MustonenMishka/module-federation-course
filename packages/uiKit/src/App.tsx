import React from 'react';

import './App.css';
import { Header } from './components/Header/Header';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header userName="Test Username" />
    </div>
  );
};
