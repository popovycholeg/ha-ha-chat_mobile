import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import loginReducer from './slices/loginSlice';

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

export const store = configureStore({
 reducer: { loginReducer: loginReducer},
 middleware,
 devTools: false,
});