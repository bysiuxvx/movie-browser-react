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
    backgroundColor: '#E8D9D6',
    borderRadius: '10px',
  },
  img: { height: 'auto', maxWidth: 150, margin: '0 10px' },
  textContainer: { maxWidth: 200 },
  text: {
    margin: '10px 10px 0 10px',
    wordWrap: 'new-line',
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
      <img style={style.img} src={movie.Poster} alt={`poster unavailable`} />
      <div style={style.textContainer}>
        <h5 style={style.text}>{movie.Title}</h5>
        <p style={style.text}>{movie.Year}</p>
      </div>
    </div>
  );
};

export default Movie;
