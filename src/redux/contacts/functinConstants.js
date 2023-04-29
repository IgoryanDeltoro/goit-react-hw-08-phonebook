export const handlePending = state => {
  state.contacts.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

export const hendleGetContactsFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.items = payload;
  state.contacts.error = null;
};
export const hendleCreateContactsFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items.push(payload);
};
export const hendleDeleteContactsFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  const index = state.contacts.items.findIndex(({ id }) => id === payload.id);
  state.contacts.items.splice(index, 1);
};
