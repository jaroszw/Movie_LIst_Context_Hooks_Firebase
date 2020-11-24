import React, { useContext } from "react";
import MovieDetails from "./MovieDetails";
import { MovieContext } from "../context/MovieContext";

const MovieList = () => {
  const { movies } = useContext(MovieContext);
  console.log(movies);

  return (
    <div className="movie-list">
      {movies.length ? (
        <ul>
          {movies.map((movie) => {
            return <MovieDetails key={movie.id} movie={movie} />;
          })}
        </ul>
      ) : (
        <div>
          <h1>No movie to display</h1>
        </div>
      )}
    </div>
  );
};

export default MovieList;
