import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { ICurrentUser, IDBUser, ILoginFormValues } from '../types';
import { getId } from '../utils';
import { axiosInst } from '../axiosInstance';

const USERS_ROUTE = '/users';

export const signUpThunk = createAsyncThunk<
  ICurrentUser,
  ILoginFormValues,
  { rejectValue: string }
>('auth/signUp', async (formValues: ILoginFormValues, { rejectWithValue }) => {
  try {
    const existingUsersResponse: AxiosResponse<IDBUser[]> = await axiosInst.get(USERS_ROUTE);
    const isAlreadyExists = existingUsersResponse.data.some(
      (user) => user.username === formValues.username,
    );
    if (isAlreadyExists) return rejectWithValue('User already exists');
  } catch {
    return rejectWithValue('Error fetching users');
  }

  const newUser: IDBUser = {
    id: getId(),
    username: formValues.username,
    password: formValues.password,
    posts: [],
  };
  try {
    await axiosInst.post(USERS_ROUTE, newUser);
  } catch (e) {
    return rejectWithValue('Error adding new user');
  }

  return {
    username: newUser.username,
    id: newUser.id,
    posts: newUser.posts,
  };
});

export const signInThunk = createAsyncThunk<
  ICurrentUser,
  ILoginFormValues,
  { rejectValue: string }
>('auth/signIn', async (formValues: ILoginFormValues, { rejectWithValue }) => {
  let foundUser: IDBUser | undefined;

  try {
    const existingUsersResponse: AxiosResponse<IDBUser[]> = await axiosInst.get(USERS_ROUTE);
    foundUser = existingUsersResponse.data.find((user) => user.username === formValues.username);
    if (!foundUser) return rejectWithValue('User with this name does not exist');
  } catch {
    return rejectWithValue('Error fetching users');
  }

  const isPasswordMatches = foundUser.password === formValues.password;
  if (!isPasswordMatches) return rejectWithValue('Wrong password');

  return {
    username: foundUser.username,
    id: foundUser.id,
    posts: foundUser.posts,
  };
});
