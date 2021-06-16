import React, { useEffect, useState } from 'react';
import Search from './components/Search';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState('');

  const movieResquest = async (movieSearch) => {
    const key = `http://www.omdbapi.com/?s=${movieSearch}&apikey=b46dc190`;

    const response = await fetch(key);
    const responseJson = await response.json();

    console.log(responseJson);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    movieResquest(movieSearch);
  }, [movieSearch]);

  return (
    <div className="App">
      yo
      <Search movieSearch newSearch={setMovieSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
