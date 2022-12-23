import React, { useState} from "react";
import MovieList from "./MovieList";
import Search from "./Search"

function App() {
  const [movieList, setMovieList] = useState([
    {"title":"Garfield", "url":"https://www.imdb.com/title/tt0356634/", "image":"http://image.tmdb.org/t/p/w500//OxMkPvxxroH5TBTaeXxEEDwxOl.jpg"}, 
    {"title":"The Hulk", "url":"https://www.imdb.com/title/tt0286716/", "image":"http://image.tmdb.org/t/p/w500//gKzYx79y0AQTL4UAk1cBQJ3nvrm.jpg"}
  ])
 
  return (
    <>
      <Search movieList={movieList}/>
      <h1>Recommended</h1>
      <MovieList movieList={movieList}/>

    </>
  );
}

// function GetMovies() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`http://localhost/movies`);
//       const newData = await response.json();
//       setData(newData);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>React with Flask API on Docker</p>
//         <ul>
//           {data && data.movies.map(movie => {
//             <li>{movie.title} <a>{movie.url}</a></li>
//           })
//           }
//         </ul>
//       </header>
//     </div>
//   );
// }

export default App;