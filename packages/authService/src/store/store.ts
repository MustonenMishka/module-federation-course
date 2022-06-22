import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './slices';
import { ILoginFormValues } from '../types';
import { signInThunk, signUpThunk } from './thunks';

const authStore = configureStore({ reducer: authSlice.reducer });

export const getAuthState = () => authStore.getState();

export const signUp = (formValues: ILoginFormValues) => authStore.dispatch(signUpThunk(formValues));
export const signIn = (formValues: ILoginFormValues) => authStore.dispatch(signInThunk(formValues));
