import { createSlice } from "@reduxjs/toolkit"

export const favoritesSlice = createSlice({
  name: "FavoritesList",
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites += action.payload
    },
    removeFromFavorites: (state, action) => {
      state.favorites -= action.payload
    },
  },
})

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
