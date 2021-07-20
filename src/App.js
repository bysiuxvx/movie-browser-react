import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import MovieList from './components/MovieList';
import Modal from './components/Modal';
import '../src/App.css';

const style = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#1f1f1f',
  },
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState('');
  const [movieModal, setMovieModal] = useState('');

  const movieResquest = async (movieSearch) => {
    try {
      const key = `https://www.omdbapi.com/?s=${movieSearch}&apikey=b46dc190`;

      const response = await fetch(key);
      const responseJson = await response.json();

      console.log(responseJson);

      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    movieResquest(movieSearch);
    if (movieSearch === '') setMovies([]);
  }, [movieSearch]);

  return (
    <div className="App" style={style.body}>
      <Search input={movieSearch} newSearch={setMovieSearch} />
      <MovieList movies={movies} getModalDetails={setMovieModal} />
      <Modal modalDetails={movieModal} setMovieModal={setMovieModal} />
    </div>
  );
};

export default App;
