import React from 'react';

const MovieList = (props) => {
  //   const { movies } = props;
  return (
    <div className="list-container">
      {props.movies.map((movie) => (
        <div key={movie.Title} className="movie-element">
          <img src={movie.Poster} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
