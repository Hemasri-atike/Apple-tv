import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Apple TV+</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies/popular">Popular</Link></li>
        <li><Link to="/movies/top_rated">Top Rated</Link></li>
        <li><Link to="/movies/upcoming">Upcoming</Link></li>
        {/* <li><Link to="/kids">Kids</Link></li> */}
        <li><Link to="/search">Search</Link></li>
      </ul>

      <div className="auth">
        {user ? (
          <>
            <span className="welcome-msg">Hi, {user.username}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <Link to="/login" className="login-btn">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
