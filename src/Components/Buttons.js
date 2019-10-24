import React, { useState } from "react";
import "../App.css";

const TeamButtons = props => {
  return (
    <div>
      <div className="homeButtons">
        <div className="home__score">{props.homeScore}</div>

        <button
          className="homeButtons__touchdown"
          onClick={() => props.updateHomeScore(props.homeScore + 7)}
        >
          Home Touchdown
        </button>

        <button
          className="homeButtons__fieldGoal"
          onClick={() => props.updateHomeScore(props.homeScore + 3)}
        >
          Home Field Goal
        </button>
        <button
          className="homeButtons__reset"
          onClick={() => props.updateHomeScore(32)}
        >
          Home Reset
        </button>
      </div>

      <div className="awayButtons">
        <div className="away__score">{props.awayScore}</div>

        <button
          className="awayButtons__touchdown"
          onClick={() => props.updateAwayScore(props.awayScore + 7)}
        >
          Away Touchdown
        </button>
        <button
          className="awayButtons__fieldGoal"
          onClick={() => props.updateAwayScore(props.awayScore + 3)}
        >
          Away Field Goal
        </button>
        <button
          className="awayButtons__reset"
          onClick={() => props.updateAwayScore(32)}
        >
          Away Reset
        </button>
      </div>
    </div>
  );
};

export default TeamButtons;
