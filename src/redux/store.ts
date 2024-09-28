// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slices/auth/loginSlice';
import registerReducer from './slices/auth/registerSlice';

export const store = configureStore({
    reducer: {
        loginData: loginReducer,
        registerData: registerReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
