'use client';

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AccessTokenSlice {
  value: string | null;
}

const initialState: AccessTokenSlice = {
  value: null,
}

export const accessTokenSlice = createSlice({
  name: 'accessToken',
  initialState,
  reducers: {
    change: (state: AccessTokenSlice, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    clear: (state: AccessTokenSlice) => {
      state.value = null
    }
  }
})

export const { change, clear } = accessTokenSlice.actions;
export default accessTokenSlice.reducer;