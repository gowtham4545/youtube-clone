import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { } from '../constants'
import { login, logout } from "../Actions/authAction";

const initialState = {
    accessToken: sessionStorage.getItem('ytc-token') ? sessionStorage.getItem('ytc-token') : null,
    user: sessionStorage.getItem('ytc-user') ? JSON.parse(sessionStorage.getItem('ytc-user')) : null,
    loading: false,
    error: null,
    success: false
}

export const signIn = createAsyncThunk('auth/login', login);
export const signOut = createAsyncThunk('auth/logout', logout);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: lifeCycle => {
        lifeCycle.addCase(signIn.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        lifeCycle.addCase(signIn.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.success = true;
            state.user = payload.profile;
            state.accessToken = payload.token;
            state.error = null;
        });
        lifeCycle.addCase(signIn.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
            state.accessToken = null;
        });
        lifeCycle.addCase(signOut.fulfilled,(state)=>{
            state.accessToken=null;
            state.user=null;
        })
    }
});

export default authSlice.reducer;