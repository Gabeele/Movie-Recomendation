import React from "react"
import Movie from "./Movie"

export default function MovieList({movieList}) {
    return (
        movieList && movieList.movies.map(movie => {
            return <div className="movie-card" key={movie.title}><Movie movie={movie} /></div>
        })
    )


}