import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import Modal from "./components/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  setMovieList,
  clearList,
} from "./components/redux/reducers/movieListSlice";
import "./styles/App.scss";

const App = () => {
  // const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState("");
  const [favorites, setFavorites] = useState([]);

  const dispatch = useDispatch();
  // const { search } = useSelector((state) => state.movieSearch);

  const movieRequest = async (movieSearch) => {
    try {
      const key = `https://www.omdbapi.com/?s=${movieSearch}&apikey=b46dc190`;

      const response = await fetch(key);
      const responseJson = await response.json();

      console.log(responseJson);

      if (responseJson.Search) {
        dispatch(setMovieList(responseJson.Search));
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const movieRequest = async (movieSearch) => {
  //   try {
  //     const key = `https://www.omdbapi.com/?s=${movieSearch}&apikey=b46dc190`;

  //     const response = await fetch(key);
  //     const responseJson = await response.json();

  //     console.log(responseJson);

  //     if (responseJson.Search) {
  //       dispatch(setMovieList(responseJson.Search));
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   movieRequest(movieSearch);
  //   if (movieSearch === "") setMovies([]);
  // }, [movieSearch]);
  useEffect(() => {
    movieRequest(movieSearch);
    if (movieSearch === "") dispatch(clearList());
  }, [movieSearch]);

  // useEffect(() => {}, [favorites]);

  return (
    <div className="App">
      <Search input={movieSearch} newSearch={setMovieSearch} />
      <MovieList />
      <Modal setFavorites={setFavorites} favorites={favorites} />
    </div>
  );
};

export default App;

// const addToFavorites = () => {
//   localStorage.setItem(
//     `${modalDetails.Title}`,
//     JSON.stringify([
//       modalDetails.Title,
//       modalDetails.Year,
//       modalDetails.imdbID,
//     ])
//   );
// };
