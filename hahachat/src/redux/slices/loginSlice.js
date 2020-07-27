import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: null,
  reducers: {
    setToken(state, action) { return action.payload },
    deleteToken() { null }
  }
});

const { actions, reducer } = loginSlice;
export const { setToken, deleteToken } = actions;
export default reducer;