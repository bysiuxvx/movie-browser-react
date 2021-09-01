import { createSlice } from "@reduxjs/toolkit";

export const movieListSlice = createSlice({
  name: "movieList",
  initialState: {
    movieList: [],
  },
  reducers: {
    setMovieList: (state, action) => {
      state.movieList = action.payload;
    },
    clearList: (state) => {
      state.movieList = [];
    },
  },
});

export const { setMovieList, clearList } = movieListSlice.actions;
export default movieListSlice.reducer;
