import "./App.css";
import { useState, useEffect, useLayoutEffect } from "react";

function App() {
  const [value, setValue] = useState()
  const submit = () => {
    alert(value)
  }
  const change = event => {
    setValue(event.target.value)
  }
  return (
    <div className="App">
      <input onChange={change} value = {value} placeholder="Enter a movie you liked..."/>
      <button onClick={submit}>Search</button>
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