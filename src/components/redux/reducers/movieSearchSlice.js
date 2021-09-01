import { createSlice } from "@reduxjs/toolkit";

export const movieSearchSlice = createSlice({
  name: "movieSearch",
  initialState: {
    search: "",
  },
  reducers: {
    newSearch: (state, action) => {
      state.search = action.payload;
    },
    clearSearch: (state) => {
      state.search = "";
    },
  },
});

export const { newSearch, clearSearch } = movieSearchSlice.actions;
export default movieSearchSlice.reducer;
