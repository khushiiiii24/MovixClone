import React from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { urls } from "./Urls";
function App() {
  return (
    <>
      <Search />
      <Home
        heading="Trending"
        btn1="Day"
        btn2="Week"
        urls={[urls.trendingMoviesDay, urls.trendingMoviesWeek]}
      />
     <Home
        heading="What's Popular"
        btn1="Movies"
        btn2="Tv Shows"
        urls={[urls.popularMovies, urls.popularTvshows]}
      />
      <Home
        heading="TopRated"
        btn1="Movies"
        btn2="Tv Shows"
        urls={[urls.topRatedMovies, urls.topRatedTvshows]}
      />
    </>
  );
}

export default App;
