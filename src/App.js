//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";


import HomeTeam from "./HomeTeam";
import AwayTeam from "./AwayTeam";
import BottomRow from "./BottomRow";
import TeamButtons from "./Buttons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [awayScore, updateAwayScore] = useState(32);
  const [homeScore, updateHomeScore] = useState(32);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <HomeTeam />
          <AwayTeam />
          {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
          <div className="timer">00:03</div>
        </div>
        <BottomRow />
      </section>

      <section className="buttons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <TeamButtons />
      </section>
    </div>
  );
}

export default App;
