import React from "react"

export default function Movie({movie}) {
    return (
        <>
            <h4>{movie.title}</h4>
            <a href={movie.url}>Details</a>
            <img alt={movie.title} src={movie.image}></img>
        </>
    )


}