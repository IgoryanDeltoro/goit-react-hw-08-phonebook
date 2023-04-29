import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createContactsQuery,
  deleteContactsQuery,
  getContactsQuery,
} from 'services/apiQueries';

export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (token) {
      try {
        return await getContactsQuery(token);
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
export const createContactThunk = createAsyncThunk(
  'contacts/createContact',
  async (data, thunkAPI) => {
    try {
      return await createContactsQuery(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      return await deleteContactsQuery(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
