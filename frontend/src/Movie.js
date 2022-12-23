import React from "react"

export default function Movie({ movie }) {
    return (
        <>
            <a className="link" href={"http://image.tmdb.org/t/p/w500" + movie.url} target="_blank">
                <h4 className="title">{movie.title}</h4>

                <img className="poster" alt={movie.title} src={movie.poster_path}></img>

                <div className="details">
                    <p className=""><strong>Release Date: </strong>{movie.release_date}</p>
                    <p className=""><strong>Average Rating: </strong>{movie.vote_average}</p>
                    <p className=""><strong>Number of Ratings: </strong>{movie.vote_count}</p>
                    <p className=""><strong>Popularity: </strong>{movie.popularity}</p>
                </div>
            </a>


        </>
    )


}