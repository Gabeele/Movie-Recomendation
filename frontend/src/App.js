import React, { useState } from "react";
import MovieList from "./MovieList";
import Search from "./Search"
import Header from "./Header"

function App() {
  const [movieList, setMovieList] = useState()

  function setParentValue(value) {
    setMovieList(value)

  }

  return (
    <div className="container">
      <Header />
      <Search setValue={setParentValue} />
      <div className="movies">
        <MovieList movieList={movieList} /></div>
    </div>
  );
}

export default App;