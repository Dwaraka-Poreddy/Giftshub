import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import MainPage from "./MainPage";
import Nav from "./Nav";

import Magazine from "./Magazine";
import NewsPaperPage from "./NewsPaperPage";
import Cubes from "./Cubes";

import OpenGreetingCardPage from "./OpenGreetingCardPage";
import LiveOpenGreetingCardPage from "./LiveOpenGreetingCardPage";
import AnimatedFramePage from "./AnimatedFramePage";
import SpecialCardPage from "./SpecialCardPage";
import HoneyComb from "./HoneyComb";
import SplitWallImagePage from "./SplitWallImagePage.js";
import LiveSplitWall from "./LiveSplitWall.js";
import LiveThreeDImage from "./LiveThreeDImage";
import LiveSlidePuzzle from "./LiveSlidePuzzle";
import LiveSpecialCard from "./LiveSpecialCard";
import SlidePuzzlePage from "./SlidePuzzlePage";
import ThreeDImagePage from "./ThreeDImagePage";
import LiveNewsPaperPage from "./LiveNewsPaperPage";
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/nav" component={Nav} />

        <Route exact path="/newspaperpage" component={NewsPaperPage} />
        <Route exact path="/cubes" component={Cubes} />
        <Route exact path="/slidepuzzlepage" component={SlidePuzzlePage} />
        <Route exact path="/magazine" component={Magazine} />
        <Route exact path="/greet" component={Header} />
        <Route exact path="/honeycomb" component={HoneyComb} />
        <Route
          exact
          path="/opengreetingcardpage"
          component={OpenGreetingCardPage}
        />
        <Route exact path="/specialcardpage" component={SpecialCardPage} />
        <Route
          exact
          path="/splitwallimagePage"
          component={SplitWallImagePage}
        />
        <Route exact path="/threedimagepage" component={ThreeDImagePage} />
        <Route exact path="/animatedframePage" component={AnimatedFramePage} />

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
        <Route
          exact
          path="/live/newspaper/:slug"
          component={LiveNewsPaperPage}
        />
        <Route
          exact
          path="/live/opengreetingcard/:slug"
          component={LiveOpenGreetingCardPage}
        />
      </Switch>
    </div>
  );
}
