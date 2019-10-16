//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";

import HomeTeam from "./HomeTeam";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

    const [awayScore, updateAwayScore] = useState(32);
    const [homeScore, updateHomeScore] = useState(32);


  return (
    <div className="container">
      <section className="scoreboard">

        <div className="topRow">
          <HomeTeam />
        </div>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick= {() => updateHomeScore(homeScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick= {() => updateHomeScore(homeScore + 3)}>Home Field Goal</button>
          <button className="homeButtons__reset" onClick= {() => updateHomeScore(32)}>Home Reset</button>

        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick= {() => updateAwayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick= {() => updateAwayScore(awayScore + 3)}>Away Field Goal</button>
          <button className="awayButtons__reset" onClick= {() => updateAwayScore(32)}>Away Reset</button>

        </div>
      </section>
    </div>
  );
}

export default App;
