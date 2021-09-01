import React from "react";
import { useDispatch } from "react-redux";
import { setModalDetails } from "./redux/reducers/modalDetailsSlice";

const Movie = (props) => {
  const { movie } = props;

  const dispatch = useDispatch();

  const getMovieDetails = async () => {
    try {
      const key = `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=b46dc190`;
      const response = await fetch(key);
      const responseJson = await response.json();

      if (responseJson) {
        dispatch(setModalDetails(responseJson));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      key={movie.Title}
      className="movie-element"
      onClick={() => getMovieDetails(movie.imdbID)}
    >
      <img src={movie.Poster} alt={`poster unavailable`} />
      <div>
        <h5>{movie.Title}</h5>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
};

export default Movie;
