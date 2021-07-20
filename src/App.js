import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import MovieList from './components/MovieList';
import Modal from './components/Modal';
import './App.css';

const style = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState('');
  const [movieModal, setMovieModal] = useState('');

  const movieResquest = async (movieSearch) => {
    try {
      const key = `http://www.omdbapi.com/?s=${movieSearch}&apikey=b46dc190`;

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
    <div
      className="App"
      style={style.body}
      onClick={() => {
        const resetModal = () => {
          setMovieModal('');
        };
        resetModal();
      }}>
      <Search input={movieSearch} newSearch={setMovieSearch} />
      <MovieList
        movies={movies}
        modalDetails={movieModal}
        getModalDetails={setMovieModal}
      />
      <Modal modalDetails={movieModal} />
    </div>
  );
};

export default App;
