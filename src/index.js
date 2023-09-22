import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'

const App = ()=> {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
        const {data} = await axios.get('/api/movies');
        setMovies(data);
        console.log(data);
    }
    fetchMovies();
  },[])

  return (
  <div>  
    <h1>Movies List</h1>
    <ul>
      {
        movies.map((movie) => {
          return(
            <li key={movie.id}>
              <h2>{movie.name}</h2>
              <h3>
                <span>
                  Rating: {movie.stars} Stars
                </span>
              </h3>
            </li>
          )
        })
      }
    </ul>
  </div>  
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
