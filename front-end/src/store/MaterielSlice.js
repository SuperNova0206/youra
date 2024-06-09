import { createSlice } from "@reduxjs/toolkit";
import {
    getMateriels,
    showMateriel,
    deleteMateriel,
} from "../services/ActionsThunk_Materiel";

const initialState = {
    loading: false,
    error: null,
    details_Materiel: null,
    materials: [],
    searchText: "",
};

const materielSlice = createSlice( {
    name: "materiel",
    initialState,
    reducers: {
        setSearchText: ( state, action ) => {
            state.searchText = action.payload;
        },
    },
    extraReducers: ( builder ) => {
        builder
            .addCase( getMateriels.pending, ( state ) => {
                state.loading = true;
                state.error = null;
            } )
            .addCase( getMateriels.rejected, ( state, action ) => {
                state.loading = false;
                state.error = action.error.message;
            } )
            .addCase( getMateriels.fulfilled, ( state, action ) => {
                state.loading = false;
                state.materials = action.payload;
            } )

            .addCase( showMateriel.pending, ( state ) => {
                state.loading = true;
            } )
            .addCase( showMateriel.rejected, ( state, action ) => {
                state.loading = false;
                state.error = action.payload;
            } )
            .addCase( showMateriel.fulfilled, ( state, action ) => {
                state.loading = false;
                state.details_Materiel = action.payload;
            } )

        builder.addCase( deleteMateriel.pending, ( state ) => {
            state.loading = true;
            state.error = null;
        } );
        builder.addCase( deleteMateriel.rejected, ( state, action ) => {
            state.loading = false;
            state.error = action.payload;
        } );
        builder.addCase(deleteMateriel.fulfilled, (state, action) => {
            state.loading = false;
            state.materials = state.materials.filter(material => material.id !== action.payload);
        });
    },
} );

export const { setSearchText } = materielSlice.actions;
export default materielSlice.reducer;