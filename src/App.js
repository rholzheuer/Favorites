// client/src/App.js
import React from 'react';
import './App.css';
import Favorites from './components/Movies';
import UserFavorites from './components/UserFavorites';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import logo from '/Users/robinholzheuer/Documents/01Uni/OAMK/Term2/AdvancedWebApplicationsProject/Project Group 1/BackupFavorites/Favorites/client/src/Logo.png'; // Stellen Sie sicher, dass der Pfad zum Logo korrekt ist

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="logo">
            <img src={logo} alt="Nord Flix Logo" />
            <span>NORD FLIX</span>
          </div>
          <nav>
            <Link to="/">MOVIES</Link>
            <Link to="/showtimes">SHOWTIMES</Link>
            <Link to="/groups">GROUPS</Link>
            <Link to="/user-favorites">MY PROFILE</Link>
            <input type="text" placeholder="Search" />
            <button className="search-btn">SEARCH</button>
            <button className="sign-in-btn">SIGN IN</button>
            
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Favorites />} />
          <Route path="/user-favorites" element={<UserFavorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;