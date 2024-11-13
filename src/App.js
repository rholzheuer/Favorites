// client/src/App.js
import React from 'react';
import './App.css';
import Favorites from './components/Favorites';
import UserFavorites from './components/UserFavorites';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Popular Movies</Link> | <Link to="/user-favorites">My Favorites</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Favorites />} />
          <Route path="/user-favorites" element={<UserFavorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
