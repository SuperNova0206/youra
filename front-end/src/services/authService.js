import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const registerUser = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', userData);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            return thunkAPI.rejectWithValue(error.response.data);
        } else {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
});

const loginUser = createAsyncThunk("auth/login", async (userData) => {
    const response = await axios.post("http://127.0.0.1:8000/api/login", userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log("API login:", response.data);
    return response.data;
});

export const logoutUser = createAsyncThunk('profile/logoutUser', async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.profile.token;

    try {
        const response = await axios.post('http://127.0.0.1:8000/api/logout', {}, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.status === 200) {
            return response.data;
        } else {
            return rejectWithValue('Logout failed');
        }
    } catch (error) {
        if (error.response && error.response.status === 401) {
            return rejectWithValue('Unauthorized');
        }
        return rejectWithValue(error.message);
    }
});

export {
    loginUser,
};
