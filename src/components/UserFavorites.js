import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserFavorites.css'; // Ensure the CSS file path is correct

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
      await axios.delete(`${serverUrl}/${movieId}`);
      setFavorites(favorites.filter(movie => movie.id !== movieId));
    } catch (error) {
      console.error('Error removing favorite:', error);
    }
  }

  return (
    <div>

      <main>
        <section className="user-info">
          <h2>User Information</h2>
          <p><strong>Name:</strong> John Doe (Hardcoded)</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
        </section>

        <section className="favorite-movies">
          <h2>Your favorite movies</h2>
          <div className="movie-cards">
            {favorites.map(movie => (
              <div key={movie.id} className="movie-card">
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className="movie-poster" />
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
                <button onClick={() => removeFavorite(movie.id)} className="remove-favorite-button">
                  Remove from Favorites
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default UserFavorites;
