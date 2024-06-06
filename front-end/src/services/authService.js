import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loginUser = createAsyncThunk( "auth/login", async (userData) => {
    return axios
        .post( "http://127.0.0.1:8000/api/login", userData )
        .then( ( response ) => response.data );
} );

const registerUser = createAsyncThunk( "auth/register", async (userData) => {
    return axios
        .post( "http://127.0.0.1:8000/api/register", userData )
        .then( ( response ) => response.data );
} );

const logoutUser = createAsyncThunk( "auth/logout", async () => {
    return axios
        .post( "http://127.0.0.1:8000/api/logout" )
        .then( ( response ) => response.data );
} );

export {
    loginUser,
    registerUser,
    logoutUser,
};
