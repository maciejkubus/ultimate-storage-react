'use client';

import { configureStore } from "@reduxjs/toolkit";
import accessTokenReducer from './features/access-token/accessTokenSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    accessToken: accessTokenReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;