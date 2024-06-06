import { createSlice } from "@reduxjs/toolkit";
import {
    getFormateurs,
    createFormateur,
    updateFormateur,
    deleteFormateur,
    showFormateur,
} from "../services/ActionThunk_Formateur";

const FormateurSlice = createSlice( {
    name: "Formateurs",
    initialState: {
        loading: false,
        error: null,
        Formateurs: [],
        text_recherche: "",
    },
    reducers: {
        setTexteRecheche: ( state, action ) => {
            state.text_recherche = action.payload;
        },
    },
    extraReducers: ( builder ) => {
        builder
            .addCase( getFormateurs.pending, ( state ) => {
                state.loading = true;
                state.error = false;
            } )
            .addCase( getFormateurs.rejected, ( state, action ) => {
                state.loading = false;
                state.error = action.payload.message;
            } )
            .addCase( getFormateurs.fulfilled, ( state, action ) => {
                state.loading = false;
                state.Formateur = action.payload;
            } )

            .addCase( showFormateur.pending, ( state ) => {
                state.loading = true;
                state.error = false;
            } )
            .addCase( showFormateur.rejected, ( state, action ) => {
                state.loading = false;
                state.error = action.payload.message;
            } )
            .addCase( showFormateur.fulfilled, ( state, action ) => {
                state.loading = false;
                state.details_Formateur = action.payload;
            } )

            .addCase( createFormateur.pending, ( state ) => {
                state.loading = true;
                state.error = false;
            } )
            .addCase( createFormateur.rejected, ( state, action ) => {
                state.loading = false;
                state.error = action.payload.message;
            } )
            .addCase( createFormateur.fulfilled, ( state, action ) => {
                state.loading = false;
            } )

            .addCase( updateFormateur.pending, ( state ) => {
                state.loading = true;
                state.error = false;
            } )
            .addCase( updateFormateur.rejected, ( state, action ) => {
                state.loading = false;
                state.error = action.payload.message;
            } )
            .addCase( updateFormateur.fulfilled, ( state, action ) => {
                state.loading = false;
            } )

            .addCase( deleteFormateur.pending, ( state ) => {
                state.loading = true;
                state.error = false;
            } )
            .addCase( deleteFormateur.rejected, ( state, action ) => {
                state.loading = false;
                state.error = action.payload.message;
            } )
            .addCase( deleteFormateur.fulfilled, ( state, action ) => {
                state.loading = false;
            } );
    },
} );
export const { setTexteRecheche } = FormateurSlice.actions;
export default FormateurSlice.reducer;
