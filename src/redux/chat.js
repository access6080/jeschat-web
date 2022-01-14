import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../api';

export const room = createAsyncThunk(
  'chat/room',
  async (payload) => {
    const { data } = await api.createRoom(payload);
    return data;
  })

export const chatSlice = createSlice({
    name: "chat",
    initialState: {
        recipeint: {
            id: '',
            username: ''
        },
        avatar: null,
        isOnline: false,
        status: null
    },

    reducers: {},
    
    extraReducers: {
        [room.pending]: (state) => {
            state.status = "loading";
        },

        [room.fulfilled]: (state,  { payload }) => {
            state.recipeint.id = payload.id;
            state.recipeint.username = payload.username;
            state.avatar = payload.avatar;
            state.status = "success"
        },

        [room.rejected]: (state) => {
            state.status = "failed"
        },
    }
});

export default chatSlice.reducer;
