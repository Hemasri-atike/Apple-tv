import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Movielist from "./Components/Movielist";
import Moviedetail from "./Components/MovieDetail/Moviedetail";
import Tvshow from "./Components/TvShows/Tvshow";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import Login from "./Components/Login";
import Register from "./Components/Register";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
<Route path="/register" element={<Register />} />
        <Route path="/movie/:id" element={<Moviedetail />} />
        <Route path="/movies/:type" element={<Movielist />} />
        {/*  movie */}
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
