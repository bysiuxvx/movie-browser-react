import React from 'react';

const style = {
  container: {
    height: 350,
    width: 'auto',
    margin: '20px 20px 0 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid black',
  },
  img: { height: 'auto', maxWidth: 180 },
};

const Movie = (props) => {
  const { movie, getModalDetails } = props;

  const getMovieDetails = async () => {
    try {
      const key = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=b46dc190`;
      const response = await fetch(key);
      const responseJson = await response.json();
      console.log(responseJson);
      if (responseJson) {
        getModalDetails(responseJson);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={style.container}
      key={movie.Title}
      className="movie-element"
      onClick={() => getMovieDetails(movie.imdbID)}>
      <img style={style.img} src={movie.Poster} />
      <h5>{movie.Title}</h5>
    </div>
  );
};

export default Movie;
