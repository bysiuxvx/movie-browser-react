import { createSlice } from "@reduxjs/toolkit";

export const modalDetailsSlice = createSlice({
  name: "modalDetails",
  initialState: {
    details: "",
  },
  reducers: {
    setModalDetails: (state, action) => {
      state.details = action.payload;
    },
    clearModalDetails: (state) => {
      state.details = "";
    },
  },
});

export const { setModalDetails, clearModalDetails } = modalDetailsSlice.actions;
export default modalDetailsSlice.reducer;
