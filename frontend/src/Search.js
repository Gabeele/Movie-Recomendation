import React, { useState, useRef } from "react"

export default function Search({setValue}) {
    const searchRef = useRef()
    const [data, setData] = useState()

    async function  getMovies(e) {
        const search = searchRef.current.value
        if (search === '')
            return 

        const response = await fetch('http://localhost/movies');
        const list = await response.json();
        setValue(list)

    }

    return (
        <>
        <input ref={searchRef} type="text" placeholder="Enter in a movie"></input>
        <button onClick={getMovies}>Search</button>
        </>
    )


}
 