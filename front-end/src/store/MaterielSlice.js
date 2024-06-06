import { createSlice } from "@reduxjs/toolkit";
import {
    getMateriels,
    createMateriel,
    updateMateriel,
    deleteMateriel,
    showMateriel,
} from "../services/ActionsThunk_Materiel";

const initialState = {
    loading: false,
    error: null,
    materials: [],
    searchText: "",
};

const materielSlice = createSlice({
    name: "materiel",
    initialState,
    reducers: {
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMateriels.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getMateriels.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(getMateriels.fulfilled, (state, action) => {
                state.loading = false;
                state.materials = action.payload;
            })

            .addCase(showMateriel.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(showMateriel.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(showMateriel.fulfilled, (state, action) => {
                state.loading = false;
                state.detailsMateriel = action.payload;
            })

            .addCase(createMateriel.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createMateriel.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(createMateriel.fulfilled, (state) => {
                state.loading = false;
            })

            .addCase(updateMateriel.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateMateriel.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(updateMateriel.fulfilled, (state) => {
                state.loading = false;
            })

            .addCase(deleteMateriel.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteMateriel.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
            .addCase(deleteMateriel.fulfilled, (state) => {
                state.loading = false;
            });
    },
});

export const { setSearchText } = materielSlice.actions;
export default materielSlice.reducer;