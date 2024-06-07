import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getMateriels = createAsyncThunk("Materiel/get", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/materials");
        console.log("API Response:", response.data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});


const showMateriel = createAsyncThunk("Materiel/show", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/materials/${id}`);
        console.log("API Response:", response.data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const createMateriel = createAsyncThunk("Materiel/create", async (nvMateriel, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://127.0.0.1:8000/api/materials", nvMateriel);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const updateMateriel = createAsyncThunk("Materiel/update", async (Materiel, { rejectWithValue }) => {
    try {
        const response = await axios.put(`http://127.0.0.1:8000/api/materials/${Materiel.id}`, Materiel);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const deleteMateriel = createAsyncThunk("Materiel/delete", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/materials/${id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

export {
    getMateriels,
    createMateriel,
    updateMateriel,
    deleteMateriel,
    showMateriel,
};
