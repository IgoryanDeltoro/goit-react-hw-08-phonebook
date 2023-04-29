import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authReducer } from './authorization/authSlice';
import { contactsReducer } from './contacts/contactsSplice';
const { configureStore } = require('@reduxjs/toolkit');

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: 'token',
};

export const store = configureStore({
  reducer: {
    phone: contactsReducer,
    auth: persistReducer(persistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
