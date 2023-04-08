import React, { useRef } from "react";

export default function Search({ setValue }) {
	const searchRef = useRef();

	async function getMovies() {
		setValue((state) => ({
			...state,
			loading: true,
			isListEmpty: false,
			movies: [],
		}));
		const search = searchRef.current.value;
		if (search === "")
			return setValue({
				loading: false,
				isListEmpty: false,
				movies: [],
			});

		const response = await fetch("https://recommendmemovies.com/api/movies?movie=" + search);
		const list = await response.json();
		if (response.status === 404) {
			// alert(
			// 	"Looks like no movies were found with that name :/\n Try again and double check the spelling."
			// );
			return setValue({
				loading: false,
				isListEmpty: true,
				movies: [],
			});
		}
		setValue({ loading: false, isListEmpty: false, ...list });
	}

	async function buttonClick(e) {
		getMovies();
	}

	async function handleKeyDown(event) {
		if (event.key === "Enter") {
			getMovies();
		}
	}

	return (
		<div className="search">
			<input
				ref={searchRef}
				type="text"
				onKeyDown={handleKeyDown}
				placeholder="Enter in a movie..."
			></input>
			<button onClick={buttonClick}>
				<i className="fa fa-search"></i>
			</button>
		</div>
	);
}
