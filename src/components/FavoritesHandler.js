import React from "react"
import { useEffect } from "react"
import { ImHeart } from "react-icons/im"
import {
  addToFavorites,
  removeFromFavorites,
} from "./redux/reducers/favoritesSlice"
import { useDispatch } from "react-redux"

const FavoritesHandler = (props) => {
  const { details } = props

  const manageFavorites = (details) => {
    const localData = localStorage.getItem("favorites")
  }

  return (
    <>
      <ImHeart className="favorite-button" />
    </>
  )
}

export default FavoritesHandler
