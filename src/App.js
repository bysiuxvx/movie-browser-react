import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const movieResquest = async () => {
    const key = 'http://www.omdbapi.com/?i=tt3896198&apikey=b46dc190';

    const response = await fetch(key);
    const responseJson = await response.json();

    console.log(responseJson);
    setMovies(responseJson.Search);
  };

  useEffect(() => {
    movieResquest();
  }, []);

  return <div className="App">yo</div>;
}

export default App;
