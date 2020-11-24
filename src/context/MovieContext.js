import React, { createContext, useReducer, useState, useEffect } from "react";
import { stringify } from "uuid";
import { MovieReducer } from "../reducers/MovieReducer";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [movies, dispatch] = useReducer(MovieReducer, [], () => {
    const localData = localStorage.getItem("movies");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <MovieContext.Provider value={{ movies, dispatch }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
