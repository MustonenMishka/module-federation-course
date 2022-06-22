import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

import { IAuthState, ICurrentUser, ResponseStatusEnum } from '../types';
import { signInThunk, signUpThunk } from "./thunks";

const initialState: IAuthState = {
  user: null,
  isLoading: false,
  error: null,
  status: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<ICurrentUser | null>) {
      state.user = action.payload;
    },
    clearResponse(state) {
      state.isLoading = false;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isAnyOf(signUpThunk.pending, signInThunk.pending), (state) => {
      state.isLoading = true;
      state.error = null;
      state.status = null;
    });
    builder.addMatcher(isAnyOf(signUpThunk.fulfilled, signInThunk.fulfilled), (state, action) => {
      state.status = ResponseStatusEnum.ACCEPTED;
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addMatcher(isAnyOf(signUpThunk.rejected, signInThunk.rejected), (state, action) => {
      state.status = ResponseStatusEnum.DENIED;
      state.isLoading = false;
      state.error = action.payload || 'Something went wrong';
    });
  },
});
