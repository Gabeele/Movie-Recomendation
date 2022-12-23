import React, { useState } from "react";
import MovieList from "./MovieList";
import Search from "./Search"

function App() {
  const [movieList, setMovieList] = useState()

  function setParentValue(value) {
    setMovieList(value)

  }

  return (
    <>
      <Search setValue={setParentValue} />
      <h1>Recommended</h1>
      <MovieList movieList={movieList} />

    </>
  );
}

export default App;