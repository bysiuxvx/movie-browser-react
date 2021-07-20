import React from 'react';

const style = {
  movieBody: {
    height: 350,
    width: 'auto',
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
    cursor: 'pointer',
  },
  img: { height: 'auto', maxWidth: 150 },
  textContainer: {},
  text: {
    margin: '10px 10px 0 10px',
  },
};

const Movie = (props) => {
  const { movie, getModalDetails } = props;

  const getMovieDetails = async () => {
    try {
      const key = `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=b46dc190`;
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
      style={style.movieBody}
      key={movie.Title}
      className="movie-element"
      onClick={() => getMovieDetails(movie.imdbID)}>
      <img style={style.img} src={movie.Poster} />
      <div style={style.textContainer}>
        <h4 style={style.text}>{movie.Title}</h4>
        <p style={style.text}>{movie.Year}</p>
      </div>
    </div>
  );
};

export default Movie;
