import React from "react";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import MovieContextProvider from "./context/MovieContext";
import AddMovie from "./components/AddMovie";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app">
      <MovieContextProvider>
        <Header />
        <NavBar />
        <AddMovie />
        <MovieList />
      </MovieContextProvider>
    </div>
  );
};

export default App;
