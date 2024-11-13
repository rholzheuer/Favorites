// client/src/components/UserFavorites.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const userFavoritesUrl = 'http://localhost:3001/api/favorites/user/945';
const serverUrl = 'http://localhost:3001/api/favorites';

function UserFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchUserFavorites();
  }, []);

  async function fetchUserFavorites() {
    try {
      const response = await axios.get(userFavoritesUrl);
      setFavorites(response.data);
    } catch (error) {
      console.error('Error fetching favorite movies:', error);
    }
  }

  async function removeFavorite(movieId) {
    try {
      // Remove favorite from the backend
      await axios.delete(`${serverUrl}/${movieId}`);
      
      // Update the favorites list in the UI by filtering out the removed movie
      setFavorites(favorites.filter(movie => movie.id !== movieId));
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  }

  return (
    <div className="favorites-page">
      <h1>User 945's Favorite Movies</h1>
      <div className="movie-grid">
        {favorites.map(movie => (
          <div key={movie.id} className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <button onClick={() => removeFavorite(movie.id)} className="remove-favorite-button">
              Remove from Favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserFavorites;
