import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMe } from '../../apis/services/userService';

const getCurrentUser = createAsyncThunk('user/getCurrentUser', () => {
    const result = getMe('/users/me');
    return result;
});

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: JSON.parse(localStorage.getItem('token')) || null,
    refresh_token: JSON.parse(localStorage.getItem('refresh_token')) || null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, { payload }) => {
            state.token = payload.access_token;
            state.refresh_token = payload.refresh_token;
            localStorage.setItem('token', JSON.stringify(payload.access_token));
            localStorage.setItem(
                'refresh_token',
                JSON.stringify(payload.refresh_token)
            );
        },
        logout: (state) => {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            state.token = null;
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCurrentUser.fulfilled, (state, { payload }) => {
            state.user = payload.data.data;
            localStorage.setItem('user', JSON.stringify(payload.data.data));
        });
    },
});

export const { setToken, logout } = userSlice.actions;

export { getCurrentUser };

export default userSlice.reducer;
