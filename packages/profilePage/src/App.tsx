import React from 'react';

import './App.css';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';

export const App: React.FC = () => {
  return (
    <div className="PostsPageApp">
      <ProfilePage />
    </div>
  );
};
