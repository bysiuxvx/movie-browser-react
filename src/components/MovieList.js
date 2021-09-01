import React from "react";
import Movie from "./Movie";
import { useSelector } from "react-redux";

const MovieList = (props) => {
  const { getModalDetails } = props;

  const { movieList } = useSelector((state) => state.movieList);

  return (
    <>
      {movieList.length > 0 && (
        <div className="list-container">
          {movieList.map((movie) => (
            <Movie movie={movie} getModalDetails={getModalDetails} />
          ))}
        </div>
      )}
    </>
  );
};

export default MovieList;
