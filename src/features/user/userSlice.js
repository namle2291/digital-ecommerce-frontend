import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getMe } from '../../apis/services/userService';

const getCurrentUser = createAsyncThunk('user/getCurrentUser', () => {
    const result = getMe('/users/me');
    return result;
});

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: JSON.parse(localStorage.getItem('token')) || null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, { payload }) => {
            state.token = payload;
            localStorage.setItem('token', JSON.stringify(payload));
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
