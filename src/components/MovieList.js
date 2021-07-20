import React from 'react';
import Movie from './Movie';

const style = {
  modalInactive: {
    height: '80vh',
    width: '75vw',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    aligntItems: 'center',
  },
  modalActive: { display: 'none' },
};

const MovieList = (props) => {
  const { movies, modalDetails, getModalDetails } = props;

  return (
    <div
      className="list-container"
      // style={modalDetails ? style.modalInactive : style.modalActive}
      style={style.modalInactive}>
      {movies &&
        movies.map((movie) => (
          <Movie movie={movie} getModalDetails={getModalDetails} />
        ))}
    </div>
  );
};

export default MovieList;
