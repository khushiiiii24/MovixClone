import React from "react";
import singleImage from "../assets/singleImage.webp";
import "../pages/SinglePages.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaPlay } from "react-icons/fa";

function SinglePages() {
  const percentage = 80;

  return (
    <div className="SinglePosterConatiner">
      <div className="posterSingleImage">
        <img src={singleImage} className="singleImage" />
      </div>
      <div className="posterSingleContent">
        <div className="SingleContentTitle">
          Predator: Killer of Killers (2025)
        </div>
        <div className="SingleContentSubTitle">The hunt begins.</div>
        <div className="singleMovieTheme">
          <button>Animation</button>
          <button>Science Fiction</button>
          <button>Action</button>
        </div>
        <div className="singlePagePlayBtns">
          <div style={{ width: 85, height: 85 }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage / 10}`}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "green",
                trailColor: "rgba(255,255,255,0.1)",
                textSize: "34px",
              })}
            />
          </div>
          <span className="play-button-container">
            <FaPlay className="play-icon" />
          </span>
          Watch Trailer
        </div>

        <div className="singleMovieOverview">
          <span>Overview</span>
          <p>
            This original animated anthology follows three of the fiercest
            warriors in human history: a Viking raider guiding her young son on
            a bloody quest for revenge, a ninja in feudal Japan who turns
            against his Samurai brother in a brutal battle for succession, and a
            WWII pilot who takes to the sky to investigate an otherworldly
            threat to the Allied cause.
          </p>
        </div>
        <div class="singleMovieDetails">
          <div class="basic-info">
            <span class="status">status:Released</span>
            <span class="release-date">release-date:Jun 5, 2025</span>
            <span class="runtime">runtime:1h 25m</span>
          </div>
          <div class="credits">
            <p class="director">Director: Dan Trachtenberg</p>
            <p class="writer">Writer: Dan Trachtenberg, Micho Rutare</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePages;
