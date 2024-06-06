import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getFormateurs = createAsyncThunk( "Formateur/get", async () => {
    return axios
        .get( "http://127.0.0.1:8000/api/Formateur" )
        .then( ( response ) => response.data );
} );
const showFormateur = createAsyncThunk( "Formateur/show", async ( id ) => {
    return axios
        .get( `http://127.0.0.1:8000/api/formateur/${ id }` )
        .then( ( response ) => response.data );
} );

const createFormateur = createAsyncThunk( "Formateur/create", async ( nvFormateur ) => {
    return axios
        .post( "http://127.0.0.1:8000/api/formateur", nvFormateur )
        .then( ( response ) => response.data );
} );

const updateFormateur = createAsyncThunk( "Formateur/update", async ( Formateur ) => {
    return axios
        .put( `http://127.0.0.1:8000/api/formateur/${ Formateur.id }`, Formateur )
        .then( ( response ) => response.data );
} );

const deleteFormateur = createAsyncThunk( "Formateur/delete", async ( id ) => {
    return axios
        .delete( `http://127.0.0.1:8000/api/formateur/${ id }` )
        .then( ( response ) => response.data );
} );

export {
    getFormateurs,
    createFormateur,
    updateFormateur,
    deleteFormateur,
    showFormateur,
};
