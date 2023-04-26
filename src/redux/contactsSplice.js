import {
  handlePending,
  handleRejected,
  hendleCreateContactsFulfilled,
  hendleDeleteContactsFulfilled,
  hendleGetContactsFulfilled,
} from './functinConstants';
import { initialState } from './initialState';
import {
  createContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setValueFilter(state, { payload }) {
      return { ...state, filter: payload };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.pending, handlePending)
      .addCase(getContactsThunk.fulfilled, hendleGetContactsFulfilled)
      .addCase(getContactsThunk.rejected, handleRejected)
      .addCase(createContactThunk.pending, handlePending)
      .addCase(createContactThunk.fulfilled, hendleCreateContactsFulfilled)
      .addCase(createContactThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, hendleDeleteContactsFulfilled)
      .addCase(deleteContactThunk.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { setValueFilter } = contactsSlice.actions;
