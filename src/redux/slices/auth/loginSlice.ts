// src/features/exampleSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { postRequest } from '../../../config/apiService';
import APIUrls from '../../../config/APIsCollections';
import { AxiosError } from 'axios';

interface LoginPayload {
    email: string;
    password: string;
}

interface LoginState {
    data: unknown;
    loading: boolean;
    error: string | null;
}

const initialState: LoginState = {
    data: null,
    loading: false,
    error: null,
};

// Async thunk for fetching data
export const loginUser = createAsyncThunk('loginData/loginUser', async (payload: LoginPayload, { rejectWithValue }) => {
    try {
        const response = await postRequest(APIUrls.LOGIN, payload, null);
        const token = response.data.token;
        localStorage.setItem('token', token);
        return response.data;
    } catch (error: unknown) { // Catch the error as unknown
        // Narrow down the error type to AxiosError
        if (error instanceof AxiosError) {
            toast(error.response?.data || error.message);
            console.error('Request failed:', error.response?.data || error.message);
            return rejectWithValue(error.response?.data || 'Login failed: Invalid credentials or server error');
        } else {
            console.error('An unexpected error occurred:', error);
            return rejectWithValue('An unexpected error occurred');
        }
    }
});


const authSlice = createSlice({
    name: 'loginData',
    initialState,
    reducers: {
        resetSuccess: (state) => {
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    },
});

export default authSlice.reducer;
