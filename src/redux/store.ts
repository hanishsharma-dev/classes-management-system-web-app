// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/auth/loginSlice';

export const store = configureStore({
    reducer: {
        loginData: loginReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
