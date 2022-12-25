import React, { useState, useRef } from "react"

export default function Search({setValue}) {
    const searchRef = useRef()
    const [data, setData] = useState()

    async function  getMovies(e) {
        const search = searchRef.current.value
        if (search === '')
            return 
        
        const response = await fetch('http://localhost/movies?movie='+search);
        const list = await response.json();
        setValue(list)

    }

    return (
        <div className="search">
        <input ref={searchRef} type="text" placeholder="Enter in a movie..."></input>
        <button onClick={getMovies}><i className="fa fa-search"></i></button>
        </div>
    )


}
 