import {
  authFulfilled,
  currentUserFulfilled,
  currentUserPending,
  currentUserRejected,
  logoutFulfilled,
} from './functionConstants';
import { initialAuthState } from './initialAuthState';

import {
  getCurrentUserThunk,
  logInThunk,
  logOutThunk,
  signUpThunk,
} from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, authFulfilled)
      .addCase(logInThunk.fulfilled, authFulfilled)
      .addCase(logOutThunk.fulfilled, logoutFulfilled)
      .addCase(getCurrentUserThunk.pending, currentUserPending)
      .addCase(getCurrentUserThunk.fulfilled, currentUserFulfilled)
      .addCase(getCurrentUserThunk.rejected, currentUserRejected);
  },
});

export const authReducer = authSlice.reducer;
