import React from 'react';

import './App.css';
import { PostsPage } from './pages/PostsPage/PostsPage';

export const App: React.FC = () => {
  return (
    <div className="PostsPageApp">
      <PostsPage />
    </div>
  );
};
