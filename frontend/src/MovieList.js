import React from "react";
import Movie from "./Movie";
import Loader from "./loader";

export default function MovieList({ movieList }) {
	return (
		<>
			{movieList?.loading ? (
				<div>
					<Loader />
				</div>
			) : null}
			{movieList?.isListEmpty ? (
				<div className="no-movies">No movies found by this name!</div>
			) : null}
			{/* {!movieList?.isListEmpty && !movieList?.loading && !movieList?.movies?.length ? (
				<div>Search any movie</div>
			) : null} */}
			{movieList?.movies?.map((movie) => {
				return (
					<div className="movie-card" key={movie.url}>
						<Movie movie={movie} />
					</div>
				);
			})}
		</>
	);
}
