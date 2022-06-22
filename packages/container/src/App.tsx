// // eslint-disable-next-line import/no-unresolved
// import { Header } from 'uiKit/Header';
// // eslint-disable-next-line import/no-unresolved
// import { PostsPage } from 'postsPage/PostsPage';
// // eslint-disable-next-line import/no-unresolved
// import { ProfilePage } from 'profilePage/ProfilePage';
// eslint-disable-next-line import/no-unresolved
// import { Route, Routes } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { signIn, signUp } from 'authService/store';
import React, { ChangeEvent, FormEvent, useState } from 'react';

import './App.css';
import { ILoginFormValues } from './types';

enum AuthModeEnum {
  SIGN_IN = 'signIn',
  SIGN_UP = 'signUp',
}

export const App: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [authMode, setAuthMode] = useState<AuthModeEnum>(AuthModeEnum.SIGN_IN);

  const handleAuthModeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAuthMode(e.target.value as AuthModeEnum);
  };
  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmitTodo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginFormValues: ILoginFormValues = { username, password };
    const result =
      authMode === AuthModeEnum.SIGN_IN
        ? await signIn(loginFormValues)
        : await signUp(loginFormValues);
    // eslint-disable-next-line no-console
    console.log(result);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmitTodo}>
        <div>
          <label htmlFor={AuthModeEnum.SIGN_IN}>
            Sign In
            <input
              id={AuthModeEnum.SIGN_IN}
              type="radio"
              name="radio"
              value={AuthModeEnum.SIGN_IN}
              checked={authMode === AuthModeEnum.SIGN_IN}
              onChange={handleAuthModeChange}
            />
          </label>

          <label htmlFor={AuthModeEnum.SIGN_UP}>
            Sign Up
            <input
              type="radio"
              name="radio"
              value={AuthModeEnum.SIGN_UP}
              checked={authMode === AuthModeEnum.SIGN_UP}
              onChange={handleAuthModeChange}
            />
          </label>
        </div>
        <input
          required
          placeholder="Username"
          type="text"
          value={username}
          onChange={handleUsernameChange}
        />
        <input
          required
          placeholder="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit" className="SubmitTodoBtn">
          Submit
        </button>
      </form>
    </div>
  );
};

// <Header userName="Test Username" />
// <Routes>
//   <Route path="/" element={<PostsPage />} />
//   <Route path="/profile" element={<ProfilePage />} />
// </Routes>
