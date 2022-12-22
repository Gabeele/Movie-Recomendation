import "./App.css";
import { useState, useEffect, useLayoutEffect } from "react";

function App() {
  return (
    <div className="App">
      <SearchPage />
    </div>
  );
}

function GetMovies(){
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost/movies`);
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, []);

  return (
		<div className="App">
			<header className="App-header">
				<p>React with Flask API on Docker</p>
        <ul>
        {data && data.movies.map(movie =>{
            <li>{movie.title} <a>{movie.url}</a></li>
          })
        }
        </ul>
			</header>
		</div>
	);
}

export default App;