import { createSlice } from "@reduxjs/toolkit";
import { logout, login, refreshUser, register } from "./operations";

const INITIAL_STATE = {
    user: {
        name: null,
    email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: null,
};

const handleRejected = (state, action) => {
    state.loading = false;
    state.error = action.payload;
}

const handlePending = (state) => {
    state.loading = true;
    state.error = null;
}

const authSlice = createSlice({
    name: "auth",
    initialState: INITIAL_STATE,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, handlePending)
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(register.rejected, handleRejected)
        
            .addCase(login.pending, handlePending)
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.isLoggedIn = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, handleRejected)

            .addCase(logout.pending, handlePending)
            .addCase(logout.fulfilled, () => {
                return INITIAL_STATE;
            })
            .addCase(logout.rejected, handleRejected)
        
            .addCase(refreshUser.pending, handlePending, (state) => {
                state.isRefreshing = true;
        })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isLoggedIn = true;
                state.user = action.payload;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.rejected, (state) => {
                state.isRefreshing = false;
            })            
    },
});

export const authReducer = authSlice.reducer;