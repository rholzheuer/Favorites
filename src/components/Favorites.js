// client/src/components/Favorites.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=8e00f8de49614d9ebf140af3901aa5b5';
const serverUrl = 'http://localhost:3001/api/favorites';

export default function Favorites() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchMovies();
    fetchFavorites();
  }, []);

  async function fetchMovies() {
    const response = await axios.get(apiUrl);
    setMovies(response.data.results);
  }

  async function fetchFavorites() {
    const response = await axios.get(serverUrl);
    setFavorites(response.data.map(fav => fav.movie_id));
  }

  async function toggleFavorite(movieId) {
    if (favorites.includes(movieId)) {
      await axios.delete(`${serverUrl}/${movieId}`);
      setFavorites(favorites.filter(id => id !== movieId));
    } else {
      await axios.post(`${serverUrl}/${movieId}`);
      setFavorites([...favorites, movieId]);
    }
  }

  return (
    <div className="movies-container">
      {movies.map(movie => (
        <div className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          <button onClick={() => toggleFavorite(movie.id)}>
            {favorites.includes(movie.id) ? 'Remove from Favorites' : 'Add to Favorites'}
          </button>
        </div>
      ))}
    </div>
  );
}
