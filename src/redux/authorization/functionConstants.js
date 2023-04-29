export const authFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

export const logoutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};
export const currentUserPending = state => {
  state.isRefreshing = true;
};
export const currentUserFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const currentUserRejected = state => {
  state.isRefreshing = false;
};
