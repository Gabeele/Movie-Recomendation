import React, { useState } from "react";
import MovieList from "./MovieList";
import Search from "./Search";
import Header from "./Header";
import Footer from "./Footer";

function App() {
	const [movieList, setMovieList] = useState({
		loading: false,
		isListEmpty: false,
		movies: [],
	});

	function setParentValue(value) {
		setMovieList(value);
	}

	return (
		<div className="container">
			<div className="bottom">
				<Footer />
			</div>
			<Header />
			<Search setValue={setParentValue} />
			<div className="movies">
				<MovieList movieList={movieList} />
			</div>
		</div>
	);
}

export default App;
