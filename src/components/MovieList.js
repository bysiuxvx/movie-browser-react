import React from 'react';
import Movie from './Movie';

const style = {
  modalInactive: {
    height: '80vh',
    maxWidth: 'auto',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  modalActive: { display: 'none' },
};

const MovieList = (props) => {
  const { movies, modalDetails, getModalDetails } = props;

  return (
    <div
      className="list-container"
      style={modalDetails ? style.modalActive : style.modalInactive}>
      {movies.map((movie) => (
        <Movie movie={movie} getModalDetails={getModalDetails} />
      ))}
    </div>
  );
};

export default MovieList;
