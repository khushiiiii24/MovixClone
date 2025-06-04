import React, { useEffect, useState } from "react";
import axios from "axios";
const baseImageURL = "https://image.tmdb.org/t/p/original";
import "./Home.css";
function Home() {
  const [trendingMoviesDay, setTrendingMoviesDay] = useState([]);
  useEffect(() => {
    fetchTrendingMoviesDay();
  }, []);
  async function fetchTrendingMoviesDay() {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=57ba7c00ee14d8883b9d0fd8084391a0&language=en-US"
    );
    const data = await response.json();
    console.log(data);

    setTrendingMoviesDay(data.results);
    console.log(data.results);
  }

  return (
    <div className="container">
      <h1>Trending movies by day</h1>
      <ul>
        {trendingMoviesDay.map((movieDay) => (
          <li key={movieDay.id}>
            <div className="poster">
              <img
                className="poster_image"
                src={`${baseImageURL}${movieDay.poster_path}`}
              />
            </div>
            <div>{movieDay.original_title}</div>
            <div>{movieDay.release_date}</div>
            <button>day</button>
            <button>week</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
