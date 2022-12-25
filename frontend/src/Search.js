import React, { useState, useRef } from "react"

export default function Search({setValue}) {
    const searchRef = useRef()

    async function  getMovies(){
        const search = searchRef.current.value
        if (search === '')
        return (<p>Sad... No movies found :\ Try again with the specific name and check the spelling.</p>)
        
        const response = await fetch('http://localhost/movies?movie='+search);
        const list = await response.json();
        setValue(list)
    }

    async function buttonClick(e) {
        getMovies()

    }

    async function handleKeyDown(event){    
        if (event.key === 'Enter') {
          getMovies()
        }
      };

    return (
        <div className="search">
        <input ref={searchRef} type="text" onKeyDown={handleKeyDown} placeholder="Enter in a movie..."></input>
        <button onClick={buttonClick} ><i className="fa fa-search"></i></button>
        </div>
    )


}
 