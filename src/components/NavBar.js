import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const NavBar = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div className="navbar">
      <h1>Movie List</h1>
      <p>MOVIES IN THE LIST:</p>
    </div>
  );
};

export default NavBar;
