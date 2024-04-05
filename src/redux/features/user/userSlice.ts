'use client';

import { User } from "@/interfaces/user.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  id: '-1',
	username: '',
	email: '',
	created: '',
	updated: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    change: (state: User, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.created = action.payload.created;
      state.updated = action.payload.updated;
    }
  }
})

export const { change } = userSlice.actions;
export default userSlice.reducer;