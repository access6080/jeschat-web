import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

export const login = createAsyncThunk(
  'auth/login',
  async (payload) => {
    const { data } = await api.login(payload);

    return data;
  })

export const signup = createAsyncThunk(
  'auth/signup',
  async (payload) => {
    const { data } = await api.signup(payload)
    return data;
})

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: '',
    token: '',
    status: null,
    isAuthenticated: false
  },
  reducers: {
    refreshToken: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.status = (payload.token) ? 'refreshed' :  'refreshed attempted'
      state.isAuthenticated = (payload.token) ? true : false;
    }
  },

  extraReducers: {
    // Login

    [login.pending]: (state) => {
      state.status = "loading";
    },

    [login.fulfilled]: (state,  { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isAuthenticated = (payload.token) ? true : false;
      state.status = "success"
    },

    [login.rejected]: (state) => {
      state.status = "failed"
    },

    // Signup

    [signup.pending]: (state) => {
      state.status = "loading";
    },
    [signup.fulfilled]: (state, { payload }) => {      
      state.user = payload.user;
      state.token = payload.token;
      state.isAuthenticated = (payload.token) ? true : false;
      state.status = "success"
    },
    [signup.rejected]: (state) => {
      state.status = "failed"
    },
  }
})

export const { refreshToken } = authSlice.actions;
export default authSlice.reducer;
