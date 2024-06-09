import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getMateriels = createAsyncThunk('materiels/getMateriels', async () => {
    const response = await axios.get('http://127.0.0.1:8000/api/materials');
    console.log("API Response:", response.data);
    return response.data;
});

export const showMateriel = createAsyncThunk("Materiel/show", async (id) => {
        const response = await axios.get(`http://127.0.0.1:8000/api/materials/${id}`);
        console.log("API Response:", response.data);
        return response.data;
});

export const deleteMateriel = createAsyncThunk("Materiel/delete", async (id, { rejectWithValue }) => {
        const response = await axios.delete(`http://127.0.0.1:8000/api/materials/${id}`);
        console.log("Materiel/delete", response.data);
        return id; // Retourne l'ID du matériel supprimé
});
