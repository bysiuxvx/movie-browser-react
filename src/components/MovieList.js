import React from 'react';
import Movie from './Movie';

const style = {
  height: '80vh',
  maxWidth: 'auto',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignContent: 'center',
};

const MovieList = (props) => {
  const { movies, getModalDetails } = props;

  return (
    <div className="list-container" style={style}>
      {movies.map((movie) => (
        <Movie movie={movie} getModalDetails={getModalDetails} />
      ))}
    </div>
  );
};

export default MovieList;
