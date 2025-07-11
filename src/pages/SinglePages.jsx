import React, { useEffect, useState } from "react";
// import singleImage from "../assets/singleImage.webp";
import "../pages/SinglePages.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaPlay } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import defaultCastImage from "../assets/defaultCastImage.jpg";
function SinglePages() {
  const [movieData, setMovieData] = useState(null);
  const { id } = useParams();
  const location=useLocation();
  const searchParams=new URLSearchParams(location.search);
  const type=searchParams.get("type")|| "movie" //default movie
  console.log(id);
  

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=57ba7c00ee14d8883b9d0fd8084391a0&append_to_response=videos,credits`
        );

        const data = await response.json();
        setMovieData(data);
        console.log(data);
      } catch (err) {
        console.error("Error fetching movie:", err);
      }
    }
    fetchMovieDetails();
  }, [id]);

  if (!movieData) return <div>Loading...</div>;

  const {
    title,
    tagline,
    release_date,
    overview,
    status,
    runtime,
    vote_average,
    genres,
    poster_path,
    director,
    writer,
    credits,
    videos,
    name,
    first_air_date
  } = movieData;

  return (
    <div className="singlePageConatiner">
      <div className="opacityLayerBackground">
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original${poster_path}`
              : defaultCastImage
          }
          className="opacityLayerBackgroundImage"
          alt={title}
        />
      </div>

      <div className="SinglePosterConatiner">
        <div className="posterSingleImage">
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : defaultCastImage
            }
            className="singleImage"
            alt={title}
          />
        </div>

        <div className="posterSingleContent">
          <div className="SingleContentTitle">
            {title||name} ({release_date||first_air_date?.slice(0, 4)})
          </div>
          <div className="SingleContentSubTitle">{tagline}</div>

          <div className="singleMovieTheme">
            {genres?.slice(0, 4).map((genre) => (
              <button key={genre.id}>{genre.name}</button>
            ))}
          </div>

          <div className="singlePagePlayBtns">
            <div style={{ width: 85, height: 85 }}>
              <CircularProgressbar
                value={vote_average * 10}
                text={`${vote_average?.toFixed(1)}`}
                styles={buildStyles({
                  textColor: "#fff",
                  pathColor: "green",
                  trailColor: "rgba(255,255,255,0.1)",
                  textSize: "34px",
                })}
              />
            </div>
            {/* <div className="voteAverage">
            {vote_average?.toFixed(1)}
          </div> */}
            <span className="play-button-container">
              <FaPlay className="play-icon" />
            </span>
            Watch Trailer
          </div>

          <div className="singleMovieOverview">
            <span>Overview</span>
            <p>{overview}</p>
          </div>

          <div className="singleMovieDetails">
            <div className="basic-info">
              <span className="status">
                <span className="basic-info-title">Status:</span>
                <span className="basic-info-subtitle">{status}</span>
              </span>
              <span className="release-date">
                <span className="basic-info-title">Release Date:</span>
                <span className="basic-info-subtitle">
                  {new Date(release_date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </span>
              <span className="runtime">
                <span className="basic-info-title">Runtime:</span>
                <span className="basic-info-subtitle">
                  {Math.floor(runtime / 60)}h {runtime % 60}m
                </span>
              </span>
            </div>

            <div className="basic-info director">
              Director: <span className="basic-info-subtitle">Unknown</span>
            </div>
            <div className="basic-info writer">
              Writer: <span className="basic-info-subtitle">Unknown</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="topCastContainer">
        <div className="sectionHeading">Top Cast</div>
        <div className="topCastMembers scrollBar">
          {movieData.credits?.cast.map((actor) => (
            <div className="topCastPerson" key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
                    : defaultCastImage
                }
                className="topCastActorImage"
              />
              <div className="actorName">{actor.name}</div>
              <div className="actorCharacter">{actor.character}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="topCastContainer OfficialVideos">
        <div className="sectionHeading">Official Videos</div>
        <div className="topCastMembers officialVideoParts scrollBar">
          {movieData.videos?.results.map((videos) => (
            <a
              href={`https://www.youtube.com/watch?v=${videos.key}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`https://img.youtube.com/vi/${videos.key}/mqdefault.jpg`}
                className="officialVideosImage"
                alt={videos.name}
              />
             
               <div className="videoName">{videos.name} <span className="official-video-play-button">
                <FaPlay className="play-icon" />
              </span></div>
    
             
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SinglePages;
