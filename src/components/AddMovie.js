import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";

const AddMovie = () => {
  const { dispatch } = useContext(MovieContext);

  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length === 0 || director.length === 0) return;
    dispatch({
      type: "ADD_MOVIE",
      movie: { title, director },
    });
    setTitle("");
    setDirector("");
  };

  return (
    <div className="add-movie">
      <form action="" onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          value={title}
          placeholder="movie title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          name="director"
          type="text"
          value={director}
          placeholder="movie director"
          onChange={(e) => setDirector(e.target.value)}
        />
        <input type="submit" value="add movie" />
      </form>
    </div>
  );
};

export default AddMovie;
