import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const MovieDetails = ({ movie }) => {
  const { title, director, id } = movie;
  const { dispatch } = useContext(MovieContext);

  return (
    <li
      className="movie-item"
      onClick={() => dispatch({ type: "REMOVE_MOVIE", id: id })}
    >
      <div>{title}</div>
      <div> - </div>
      <div>{director}</div>
    </li>
  );
};

export default MovieDetails;
