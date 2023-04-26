import { contactsReducer } from './contactsSplice';
const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: contactsReducer,
});
