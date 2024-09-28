// src/features/exampleSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { postRequest } from '../../../config/apiService';
import APIUrls from '../../../config/APIsCollections';
import { AxiosError } from 'axios';
import { AppConstants } from '../../../constants';

interface RegisterPayload {
    email: string;
    password: string;
    fullName: string;
}

interface RegisterState {
    data: unknown;
    loading: boolean;
    error: string | null;
}

const initialState: RegisterState = {
    data: null,
    loading: false,
    error: null,
};

// Async thunk for fetching data
export const registerUser = createAsyncThunk('registerData/registerUser', async (payload: RegisterPayload, { rejectWithValue }) => {
    try {
        const response = await postRequest(APIUrls.REGISTER, payload, null);
        console.log('response: ', response)
        return response;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            toast(error.response?.data || error.message);
            return rejectWithValue(error.response?.data || 'Register failed');
        } else {
            toast(error?.message);
            return rejectWithValue('An unexpected error occurred');
        }
    }
});


const authSlice = createSlice({
    name: 'registerData',
    initialState,
    reducers: {
        resetSuccess: (state) => {
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                console.log('Thunk fulfilled with payload:', action.payload);  // Log payload
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    },
});

// Export the resetSuccess action and the reducer
export const { resetSuccess } = authSlice.actions;
export default authSlice.reducer;
