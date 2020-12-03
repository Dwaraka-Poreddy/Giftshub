import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import MainPage from "./MainPage";

import NewsPaper from "./NewsPaper";
import Magazine from "./Magazine";
import PuzzlePage from "./PuzzlePage";
import Cubes from "./Cubes";
import GeneratePuzzle from "./GeneratePuzzle";
import AnimatedFrame from "./AnimatedFrame";
import SpecialCard from "./SpecialCard";
import HoneyComb from "./HoneyComb.js";
import SplitWallImagePage from "./SplitWallImagePage.js";
import LiveSplitWall from "./LiveSplitWall.js";

import ThreeDImage from "./ThreeDImage";
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/newspaper" component={NewsPaper} />
        <Route exact path="/cubes" component={Cubes} />
        <Route exact path="/puzzlePage" component={PuzzlePage} />
        <Route exact path="/magazine" component={Magazine} />
        <Route exact path="/greet" component={Header} />
        <Route exact path="/honeycomb" component={HoneyComb} />
        <Route exact path="/specialcard" component={SpecialCard} />
        <Route exact path="/splitwallimage" component={SplitWallImagePage} />
        <Route exact path="/threedimage" component={ThreeDImage} />
        <Route exact path="/animatedframe" component={AnimatedFrame} />
        <Route exact path="/live/puzzle/:slug" component={GeneratePuzzle} />
        <Route exact path="/live/splitwall/:slug" component={LiveSplitWall} />
      </Switch>
    </div>
  );
}
