import React, { useState } from "react"

export default function Search({movieList}) {
    const [search, setSearch] = useState([])

    return (
        <>
        <input type="text" placeholder="Enter in a movie"></input>
        <button>Search</button>
        </>
    )


}
 