import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getCurrentUserQuery,
  logInQuery,
  logOutQuery,
  signUpQuery,
} from 'services/apiQueries';

export const signUpThunk = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      return await signUpQuery(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(`register: ${error.request.status}`);
    }
  }
);
export const logInThunk = createAsyncThunk(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      return await logInQuery(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(`login: ${error.request.status}`);
    }
  }
);
export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    try {
      return await logOutQuery(persistedToken);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getCurrentUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      return await getCurrentUserQuery(persistedToken);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
