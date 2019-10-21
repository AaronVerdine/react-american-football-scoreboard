import React, { useState } from "react";

function TeamButtons() {
  const [awayScore, updateAwayScore] = useState(32);
  const [homeScore, updateHomeScore] = useState(32);

  return (
    <div>
      <div className="homeButtons">
        <div className="home__score">{homeScore}</div>

        <button
          className="homeButtons__touchdown"
          onClick={() => updateHomeScore(homeScore + 7)}
        >
          Home Touchdown
        </button>

        <button
          className="homeButtons__fieldGoal"
          onClick={() => updateHomeScore(homeScore + 3)}
        >
          Home Field Goal
        </button>
        <button
          className="homeButtons__reset"
          onClick={() => updateHomeScore(32)}
        >
          Home Reset
        </button>
      </div>

      <div className="awayButtons">
        <div className="away__score">{awayScore}</div>

        <button
          className="awayButtons__touchdown"
          onClick={() => updateAwayScore(awayScore + 7)}
        >
          Away Touchdown
        </button>
        <button
          className="awayButtons__fieldGoal"
          onClick={() => updateAwayScore(awayScore + 3)}
        >
          Away Field Goal
        </button>
        <button
          className="awayButtons__reset"
          onClick={() => updateAwayScore(32)}
        >
          Away Reset
        </button>
      </div>
    </div>
  );
}

export default TeamButtons;
