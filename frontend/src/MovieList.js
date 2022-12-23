import React from "react"
import Movie from "./Movie"

export default function MovieList({movieList}) {
    return (
        movieList && movieList.movies.map(movie => {
            return <Movie key={movie.title} movie={movie} />
        })
    )


}