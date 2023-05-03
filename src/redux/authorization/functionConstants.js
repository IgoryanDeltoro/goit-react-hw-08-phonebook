export const authFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.error = '';
};
export const authRejected = (state, { payload }) => {
  state.isRefreshing = false;
  state.error = payload;
};

export const logoutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
  state.error = '';
};
export const currentUserPending = state => {
  state.isRefreshing = true;
  state.error = '';
};
export const currentUserFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = '';
};

export const currentUserRejected = (state, { payload }) => {
  state.isRefreshing = false;
  state.error = payload;
};
