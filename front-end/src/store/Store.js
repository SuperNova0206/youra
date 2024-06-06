import { configureStore } from "@reduxjs/toolkit";
import ProfileReducer from "./ProfileSlice";
import materielReducer from "./MaterielSlice";

export default configureStore( {
    reducer: {
        materiel: materielReducer,
        Profile: ProfileReducer,
    },
} );
