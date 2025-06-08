import React, { useEffect, useState } from "react";
import "./Search.css";
const baseImageURL = "https://image.tmdb.org/t/p/original";

function Search() {
  const [backgroundImg, setBackgroundImg] = useState([]);
  useEffect(() => {
    fetchBackgroundImage();
  }, []);
  async function fetchBackgroundImage() {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=57ba7c00ee14d8883b9d0fd8084391a0"
    );
    const data = await response.json();
    console.log(data);
    // setBackgroundImg(data.results)
    const validMovies = data.results.filter((movie) => movie.backdrop_path);
    console.log(validMovies);
    
    setBackgroundImg(validMovies);
    
  }
  console.log(backgroundImg);
  
  return (
    <div className="searchBar">
      {backgroundImg.map((movies) => {
        <li key={movies.id}>
          <img src={`${baseImageURL}`}/>
        </li>
      })}
      <h1 className="welcome">Welcome.</h1>
      <h2 className="welcomeCaption">
        Millions of movies, TV shows and people to discover. Explore now.
      </h2>
      {/* <div className="inputDiv"> */}
      {/* <input
          type="search"
          name=""
          id=""
          placeholder="Search for a movie or tv show...."
          className="searchInput"
        ></input>
        <button className="searchBtn">Search</button>
      </div> */}

      <div className="inputBox">
        <input
          type="text"
          className="inputText"
          placeholder="Search for more movies..."
        />
        <button className="SearchBtn">Search</button>
      </div>
    </div>
  );
}

export default Search;
