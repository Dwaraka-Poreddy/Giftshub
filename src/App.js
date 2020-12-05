import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import MainPage from "./MainPage";
import Nav from "./Nav";
import NewsPaper from "./NewsPaper";
import Magazine from "./Magazine";
import PuzzlePage from "./PuzzlePage";
import Cubes from "./Cubes";
import OpenGreetingCard from "./OpenGreetingCard";
import GeneratePuzzle from "./GeneratePuzzle";
import AnimatedFramePage from "./AnimatedFramePage";
import SpecialCardPage from "./SpecialCardPage";

import SplitWallImagePage from "./SplitWallImagePage.js";
import LiveSplitWall from "./LiveSplitWall.js";
import LiveThreeDImage from "./LiveThreeDImage";
import LiveSlidePuzzle from "./LiveSlidePuzzle";
import LiveSpecialCard from "./LiveSpecialCard";
import SlidePuzzlePage from "./SlidePuzzlePage";
import ThreeDImagePage from "./ThreeDImagePage";
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/nav" component={Nav} />
        <Route exact path="/newspaper" component={NewsPaper} />
        <Route exact path="/cubes" component={Cubes} />
        <Route exact path="/slidepuzzlePage" component={SlidePuzzlePage} />
        <Route exact path="/magazine" component={Magazine} />
        <Route exact path="/greet" component={Header} />
        <Route exact path="/opengreetingcard" component={OpenGreetingCard} />
        <Route exact path="/specialcardpage" component={SpecialCardPage} />
        <Route
          exact
          path="/splitwallimagePage"
          component={SplitWallImagePage}
        />
        <Route exact path="/threedimagepage" component={ThreeDImagePage} />
        <Route exact path="/animatedframePage" component={AnimatedFramePage} />
        <Route exact path="/live/puzzle/:slug" component={GeneratePuzzle} />
        <Route exact path="/live/splitwall/:slug" component={LiveSplitWall} />
        <Route
          exact
          path="/live/specialcard/:slug"
          component={LiveSpecialCard}
        />
        <Route
          exact
          path="/live/slidepuzzle/:slug"
          component={LiveSlidePuzzle}
        />
        <Route
          exact
          path="/live/threedimage/:slug"
          component={LiveThreeDImage}
        />
      </Switch>
    </div>
  );
}
