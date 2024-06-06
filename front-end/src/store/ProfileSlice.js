import { createSlice } from "@reduxjs/toolkit";

const storedProfileDetails = localStorage.getItem("profileDetails");
const initialState = storedProfileDetails ? JSON.parse(storedProfileDetails) : { storedProfileDetails: null };

const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileDetails: (state, action) => {
      state.storedProfileDetails = action.payload;
      localStorage.setItem("profileDetails", JSON.stringify(state));
    },
    clearProfileDetails: (state) => {
      state.storedProfileDetails = null;
      localStorage.removeItem("profileDetails");
    },
  },
});

export const { setProfileDetails, clearProfileDetails } = ProfileSlice.actions;
export default ProfileSlice.reducer;