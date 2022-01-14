import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import chatReducer from './chat';

export default configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer
  }
})