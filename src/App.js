
import React, { useState, useEffect } from "react";

import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard.jsx";
import './App.css';
//9f9543f0

const API_URL = 'http://www.omdbapi.com?apikey=9f9543f0'

const movie1 = {
  "Poster" : "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  "Title" : "Batman v Superman: Dawn of Justice",
  "Type" : "movie",
  "Year" : "2016",
  "imdbID" : "tt2975590"
}

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json()
    setMovies(data.Search)
  }
  useEffect(() => {
      searchMovies("superman")
  }, []);
  return (
    <div className="app">
      <h1>Movieland</h1>
      <div className = "search">
        <input
        placeholder = "Search for Movies"
        value = {searchTerm}
        onChange = {(e) => setSearchTerm(e.target.value)}
         />
        <img
        src = {SearchIcon}
        alt = "search"
        onClick={() => searchMovies(searchTerm)}
        />
      </div>
      { movies.length > 0 ? (
        <div className="container">
        {movies.map((movie) => (
          <MovieCard movies={movie} />
        ))}
      </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
        )}
      
    </div>
  );
}

export default App;
