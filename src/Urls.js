const baseURL = "https://api.themoviedb.org/3";
const API_KEY="57ba7c00ee14d8883b9d0fd8084391a0";
export const urls = {
  trendingMoviesDay:
    `${baseURL}/trending/movie/day?language=en-US&api_key=${API_KEY}`,
  trendingMoviesWeek:
    `${baseURL}/trending/movie/week?language=en-US&api_key=${API_KEY}`,
  popularMovies:
    `${baseURL}/movie/popular?language=en-US&page=1&api_key=${API_KEY}`,
  popularTvshows:
    `https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=${API_KEY}`,
  topRatedMovies:
    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=${API_KEY}`,
  topRatedTvshows:
    `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=${API_KEY}`,
  upcomingMovies:
    `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`,
};
