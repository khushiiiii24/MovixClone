import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Home() {
  const[dayData,setDayData]=useState([]);
  useEffect(()=>{
    fetchData();
  },[]);
  async function fetchData() {
    const response=await axios.get(" https://api.themoviedb.org/3/trending/movie/day?language=en-US");
    console.log(response);
    setDayData(response.data);
  }
  return (
    <div>
      <h1>Trending movies by day</h1>
      <div></div>
    </div>
  )
}

export default Home