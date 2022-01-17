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
        room: null,
        isOnline: false,
        status: null
    },

    reducers: {},
    
    extraReducers: {
        [room.pending]: (state) => {
            state.status = "loading";
        },

        [room.fulfilled]: (state,  { payload }) => {
            state.room = payload.room;
        },

        [room.rejected]: (state) => {
            state.status = "failed"
        },
    }
});

export default chatSlice.reducer;
