import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { } from '../constants'
import { login } from "../Actions/action";

const initialState = {
    accessToken: null,
    user: null,
    loading: false,
    error: null,
    success: false
}

export const action = createAsyncThunk('auth/login', login);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: lifeCycle => {
        lifeCycle.addCase(action.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        lifeCycle.addCase(action.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.success = true;
            state.user = payload.profile;
            state.accessToken = payload.token;
            state.error = null;
        });
        lifeCycle.addCase(action.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
            state.accessToken = null;
        });
    }
});

// export action;
export default authSlice.reducer;